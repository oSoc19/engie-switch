# Switch Frontend

Frontend is written in [Vue.js](https://vuejs.org/) and using [Ionic framework](https://ionicframework.com/) for designed components.

## Project setup
To install modules using npm:
```
npm install
```
> **WARNING**: if you get an error about `ICON_PATHS`, we believe there is a problem within Ionic module. To workaround the issue, run those commands into the `switch_frontend` folder:
> ```sh
> sed -i -e 's/import { addIcons/\/\/import { addIcons/g' node_modules/@ionic/vue/dist/ionic-vue.esm.js
> sed -i -e 's/import { ICON_PATHS/\/\/import { ICON_PATHS/g' node_modules/@ionic/vue/dist/ionic-vue.esm.js
> sed -i -e 's/addIcons(ICON_PATHS)/\/\/addIcons(ICON_PATHS)/g' node_modules/@ionic/vue/dist/ionic-vue.esm.js
> ```

### Config
The config file is located at `src/config.js`. Available options:
```js
API_BASE_URL: "path_to_api",
DEBUG: true | false,
```
You should set `DEBUG` to `false` in produciton for speed improvement.

### Compiles and hot-reloads for development
To run local dev server:
```
npm run serve
```

### Compiles and minifies for production
To compile for prod:
```
npm run build
```
Then, you can serve the `/dist/` folder with any HTTP server.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
