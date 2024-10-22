import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '../src/assets/js/vuetify'

import '../src/assets/js/vuetify'
import '@/assets/css/global.css'

Vue.use(vuetify)
Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
