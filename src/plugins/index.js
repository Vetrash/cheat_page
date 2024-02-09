/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/a11y-dark.css'
import CodeWrapper from '../components/CodeWrapper.vue'

export function registerPlugins(app) {
 
  app.component('CodeWrapper', CodeWrapper);

  app.use(vuetify);
  app.use(router);
 
  app.use(VueHighlightJS)
}
