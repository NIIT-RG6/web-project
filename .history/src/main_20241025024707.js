import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "element-plus/dist/index.css";
import '@fortawesome/fontawesome-free/css/all.css';

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import vuetify from '../src/assets/js/vuetify'
import ElementPlus from "element-plus";



//import '../src/assets/js/vuetify'
import '@/assets/css/global.css'


createApp(App)
  .use(ElementPlus)
  .use(router)
  //.use(vuetify)
  .use((app) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  })
  .mount("#app");


// Vue.use(vuetify)
// Vue.config.productionTip = false
// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')
