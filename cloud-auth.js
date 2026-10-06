import{initializeApp}from"https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import{getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,setPersistence,browserLocalPersistence}from"https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import{initializeFirestore,getFirestore,persistentLocalCache,persistentMultipleTabManager,doc,getDoc,setDoc,deleteDoc,serverTimestamp,onSnapshot}from"https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const C=window.TRAILGUIDE_CONFIG,$=s=>document.querySelector(s);
const SHARE_ID=new URLSearchParams(location.search).get("share");
const app=initializeApp(C.FIREBASE,"trailguide-app");
const auth=getAuth(app);
let db;
try{db=initializeFirestore(app,{localCache:persistentLocalCache({tabManager:persistentMultipleTabManager()})})}catch(e){db=getFirestore(app)}
await setPersistence(auth,browserLocalPersistence);
const provider=new GoogleAuthProvider();provider.setCustomParameters({prompt:"select_account"});
let user=null,unsub=null,busy=false;

function ref(){return user?doc(db,C.FIRESTORE_ROOT,user.uid,"library","main"):null}
function shareRef(id){return doc(db,"trailguideShares",id)}
function render(){
  const s=$("#cloudAuthStatus"),t=$("#cloudAuthButtonTitle"),txt=$("#cloudAuthButtonText"),sync=$("#cloudSyncStatus");
  if(!s)return;
  if(SHARE_ID){
    s.innerHTML="<b>Freigabelink</b><span>Diese Ansicht wurde über einen TrailGuide-Link geöffnet.</span>";
    t.textContent=user?"Google-Konto wechseln":"Optional mit Google anmelden";
    txt.textContent="Nur nötig, wenn du deine eigene Cloud verwenden möchtest";
    sync.innerHTML="<b>Cloud-Sync</b><span>Die freigegebenen Inhalte werden nicht in die Cloud des Herausgebers zurückgeschrieben.</span>";
  }else if(user){
    s.innerHTML=`<b>${user.displayName||user.email}</b><span>${user.email||""}</span>`;
    t.textContent="Abmelden";txt.textContent="TrailGuide Cloud ist verbunden";
    sync.innerHTML="<b>Cloud-Sync</b><span>Echtzeit-Synchronisierung ist für dieses Konto aktiv.</span>";
  }else{
    s.innerHTML="<b>Cloud-Konto</b><span>Nicht angemeldet.</span>";
    t.textContent="Mit Google anmelden";txt.textContent="Dieses Gerät mit TrailGuide Cloud verbinden";
    sync.innerHTML="<b>Cloud-Sync</b><span>Anmelden, um die Synchronisierung zu aktivieren.</span>";
  }
  window.TrailGuideCloud={auth,db,user,isSignedIn:!!user,publishShare,loadShare};
  window.TrailGuideDrive?.renderStatus?.();
}
async function push(){if(SHARE_ID||!user||busy)return;busy=true;try{await setDoc(ref(),{schema:3,data:window.TrailGuide.getCloudData(),updatedAt:serverTimestamp()},{merge:true})}finally{busy=false}}
async function pull(){if(SHARE_ID||!user)return;const s=await getDoc(ref());if(s.exists()&&s.data()?.data)window.TrailGuide.replaceFromCloud(s.data().data);else await push()}
function listen(){if(unsub){unsub();unsub=null}if(SHARE_ID||!user)return;unsub=onSnapshot(ref(),s=>{if(!busy&&s.exists()&&s.data()?.data)window.TrailGuide.replaceFromCloud(s.data().data)},console.warn)}
async function publishShare({title,snapshot}){
  if(!user)throw new Error("Bitte zuerst bei TrailGuide Cloud anmelden.");
  const id=crypto.randomUUID().replace(/-/g,"");
  await setDoc(shareRef(id),{
    ownerUid:user.uid,
    ownerEmail:user.email||"",
    title:title||"TrailGuide Freigabe",
    publishedAt:new Date().toISOString(),
    appVersion:C.APP_VERSION,
    data:snapshot
  });
  const u=new URL(location.href);
  u.search="";
  u.hash="";
  u.searchParams.set("share",id);
  return {id,url:u.toString()};
}
async function loadShare(id){
  const s=await getDoc(shareRef(id));
  if(!s.exists())throw new Error("Dieser TrailGuide-Freigabelink existiert nicht oder wurde entfernt.");
  const x=s.data();
  window.TrailGuide.replaceFromShare(x.data||{}, {title:x.title||"Freigegebener TrailGuide",publishedAt:x.publishedAt||""});
  return x;
}

$("#cloudAuthButton").onclick=async()=>{try{if(user)await signOut(auth);else await signInWithPopup(auth,provider)}catch(e){window.toast(e.message)}};
$("#cloudSyncButton").onclick=async()=>{try{if(SHARE_ID){window.toast("Freigabelinks synchronisieren nicht zurück zum Herausgeber.");return}await push();window.toast("Cloud-Synchronisierung abgeschlossen")}catch(e){window.toast(e.message)}};
window.addEventListener("trailguide:localchange",()=>{if(!SHARE_ID&&user&&!busy){clearTimeout(window.__tgPush);window.__tgPush=setTimeout(()=>push().catch(console.warn),900)}});

onAuthStateChanged(auth,async u=>{
  user=u;render();
  if(SHARE_ID){
    try{await loadShare(SHARE_ID)}catch(e){console.error(e);window.toast(e.message)}
  }else if(user){
    await pull();listen();
  }else if(unsub){unsub();unsub=null}
});
render();
