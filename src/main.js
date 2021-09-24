import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS reset
import 'normalize.css/normalize.css'

// 鉴权
import './router/permission'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
