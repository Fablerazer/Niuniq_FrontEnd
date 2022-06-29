import Vue from 'vue'
// import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
// import 'ant-design-vue/dist/antd.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
