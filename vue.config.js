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
  }
}