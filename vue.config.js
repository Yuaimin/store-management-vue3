const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/styles/variable.scss";@import "@/assets/styles/global.scss";'
      }
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_APIURL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: ({ resolve: { alias } }) => {
    alias.set('@images', resolve('./src/assets/images'))
  }
}
