const webpack = require('webpack')
module.exports = {
  // 配置代理服务
  publicPath: './', // 设置打包文件相对路径
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.1:7000',
        changeOrigin: true,
        ws: true
      },
      '/epr': {
        target: 'http://192.168.1.1:7000',
        changeOrigin: true,
        ws: true
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        esriLoader: 'esri-loader'
      }])
  }
}
