//引入电脑ip地址
const { ipAddress } = require('./utils/getIPAddress')

//引入路径path
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: false, //是否自动弹出浏览器页面
    // public: '192.168.0.104',
    // host: "192.168.43.132",
    host: ipAddress,
    port: '8080',
    https: false,   //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/api': {
        target:"http://localhost:3000/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
			"^/api": "" //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉  
		}
      }
    },
  },
  

  chainWebpack: config => {
    //定义别名
    config.resolve.alias
      .set('@', resolve('./'))
      .set('@utils', resolve('./utils'))
      .set('@components', resolve('./components'))
      .set('@static', resolve('./static'))
  },
}