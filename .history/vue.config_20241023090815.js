// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   css: {
//     extract: false, // 开启 CSS source maps?
//     sourceMap: false, // css预设器配置项
//     loaderOptions: {
//       postcss: {
//         postcssOptions: {
//           plugins: [
//             require("postcss-pxtorem")({
//               // 按照自己安装的来（postcss-pxtorem 或 postcss-px2rem）
//               rootValue: 192, //设计图宽度/10
//               unitPrecision: 5, //允许REM单位增长到的十进制数字。
//               propList: ["*"],
//               //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
//               // propBlackList: [], //黑名单
//               exclude: false, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
//               selectorBlackList: [], //要忽略并保留为px的选择器
//               ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
//               replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
//               mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
//               minPixelValue: 0, //设置要替换的最小像素值(3px会被转rem)。 默认 0
//             }),
//           ],
//         },
//       },
//     },
//   },
// });



const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    extract: true, // 将 CSS 从 JavaScript 中提取，便于在生产环境中更好地处理
    sourceMap: true, // 开启 CSS Source Maps，便于调试
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require("postcss-pxtorem")({
              rootValue: 75, // 根据你的设计稿调整
              unitPrecision: 5,
              propList: ["font", "font-size", "line-height", "letter-spacing"], // 控制哪些属性要转换
              exclude: /(node_modules|bootstrap)/, // 排除第三方库的样式
              selectorBlackList: ["ignore"], // 添加类名为 "ignore" 的元素不被转换
              replace: true,
              mediaQuery: false,
              minPixelValue: 2, // 小于 2px 的值不转换为 rem，避免一些微小调整
            }),
          ],
        },
      },
    },
  },
});
