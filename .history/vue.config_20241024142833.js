const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [

          ],
        },
      },
    },
  },
});