# TrailGuide HikingGuide Format v3

`format: "hikingguide"`.

Routes may contain:
- `gpx_geometry: [[lat,lng], ...]`
- `gpx.geometry`
- `track`
- `gpx_text` containing complete GPX XML

TrailGuide v1.3 parses embedded GPX and displays the entire track on route, destination and global maps.
Manual route GPX import is also supported and works locally even when Google Drive is not connected.
Re-importing the same guide preserves existing GPX geometry unless replacement geometry is supplied.
