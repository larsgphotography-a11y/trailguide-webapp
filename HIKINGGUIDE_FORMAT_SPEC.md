# TrailGuide Hiking Guide format v1

Extension: `.hikingguide` (JSON)

Required top-level fields:
- `format`: `hikingguide`
- `format_version`: `1`
- `id`: stable unique string
- `country`, `country_code`, `region`, `destination`
- `center`: `{lat,lng}`
- `routes`: array

Each route may contain:
- `id`, `name`, `activity`, `difficulty`
- `distance_km`, `duration_min`, `ascent_m`, `descent_m`
- `start`: `{name,lat,lng}`
- `description`, `highlights[]`, `source_url`
- `gpx_drive`: Drive metadata added by TrailGuide after upload
