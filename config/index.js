if(process.env.NODE_ENV === 'development'){
    //开发环境
    ENV_CONFIG = require('./config-dev.js');
}else{
    //生产环境
    ENV_CONFIG = require('./config-prod.js');
}
 
//给环境变量process.uniEnv赋值
if (ENV_CONFIG) {
    process.uniEnv = {};
    for (let key in ENV_CONFIG) {
        process.uniEnv[key] = ENV_CONFIG[key];
    }
}