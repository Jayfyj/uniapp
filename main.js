import App from './App'

//引入环境配置
import './config'

// #ifndef VUE3
import Vue from 'vue'
import store from "./store"

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

//引入moment
import moment from 'moment'//导入文件
Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif