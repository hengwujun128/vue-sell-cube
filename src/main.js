import Vue from 'vue'
import './cube-ui'
// 全局注入的模块, header-detail 通过api 调用
import './register'

import App from './App.vue'
import 'common/stylus/index.stylus'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
