const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      AMap: "window.AMap" //注意
    }
  },
  devServer: {



    client: {
      overlay: false,
    },
  }
})
