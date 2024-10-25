import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import "element-plus/dist/index.css";
import "amfe-flexible";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import "./rem.js";

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use((app) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  })
  .mount("#app");