import Vue from 'vue'
// import App from './App.vue'
import router from './router'
// import '@/util/filter' // 引入全局过滤器
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
