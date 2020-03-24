// 拓展功能  或者 reject 暴露内部的配置
// 这里是第三方 react -  rewried
// 装饰器的配置
// UI库的配置
// const {
//     override,
//     addDecoratorsLegacy,
//     disableEsLint,
//     addBundleVisualizer,
//     addWebpackAlias,
//     adjustWorkbox
// } = require("customize-cra");

// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, '.', dir)
// }
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox ,
    fixBabelImports
  } = require("customize-cra");
  const path = require("path");
   
  module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
   
    // disable eslint in webpack
    disableEsLint(),
   
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      "ag-grid-react$": path.resolve(__dirname, "src/shared/agGridWrapper.js"),
      '@': path.join(__dirname, "src"),
 
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // adjust the underlying workbox
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    )
  );