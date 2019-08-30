/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 23:37:16
 * @LastEditTime: 2019-08-30 17:01:01
 * @LastEditors: Please set LastEditors
 */
// vue.config.js
module.exports = {
  // 选项...
  publicPath: '/',
  outputDir: 'dist',
  // 生产环境的 source map
  productionSourceMap: false,
  css: {
    modules: false,
    loaderOptions: {
      sass: {
        // 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        data: `
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/common.scss";
          @import "@/assets/scss/function.scss";
          @import "@/assets/scss/mixins.scss";
        `
      }
    }
  }
}
