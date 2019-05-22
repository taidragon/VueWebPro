import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import iview from 'iview' //  引入iview框架
import 'iview/dist/styles/iview.css' // 引入iview的css样式

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(iview) // vue注入iview插件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
