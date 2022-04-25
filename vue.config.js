<<<<<<< HEAD

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.sleepthing.com',
        // ws: true,        //如果要代理 websockets，配置这个参数
        // secure: false,  // 如果是https接口，需要配置这个参数
        // changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/'
        }
     }
    }
=======
module.exports = {
  runtimeCompiler: true,
  publicPath: './',
  devServer:{
    proxy:{
      "": {
        target: 'http://zgyh.bjxiaomai.cn',

      }
    }
  },
  configureWebpack: config =>  {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = process.env.NODE_ENV === 'production'
>>>>>>> feature-zhanhui-dai
  }
}