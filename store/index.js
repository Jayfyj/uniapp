import Vue from 'vue'
import vuex from "vuex"
Vue.use(vuex)

//获取vuex下所有模块
const modulesFiles = require.context('./modules', true, /\.js$/)
//遍历导入
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new vuex.Store({
	modules
}) 
