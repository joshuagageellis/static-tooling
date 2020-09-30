# Static Site Base

## Development Instructions
### Set Up
1. Clone repo
2. Ensure using `node >=v10`
3. Run `yarn add` to download npm modules

### Build Process
- `yarn start` — Launch localhost and webpack dev server `localhost:8080` for local development
- `yarn build` — Build and place minified production files in /dist (ensure production flag)

### Deployment
The pertinent production files are located in the /dist directory. Place these files in the root or where ever the domain directory is served. All files are static and do not require further server/db configuration.
# static-tooling
