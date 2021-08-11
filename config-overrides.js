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
    useBabelRc,
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    fixBabelImports,
    addPostcssPlugins
} = require("customize-cra");
const path = require("path");

let _fixBabelImports = fixBabelImports('import',{
    libraryName: 'antd',
    style: 'css',
})
if(process.env.TERMINAL_TYPE==="mobile"){
    _fixBabelImports = fixBabelImports('import',{
        libraryName: 'antd-mobile',
        style: 'css',
    })
}


module.exports = override(
    useBabelRc(),// add .babelrc 添加可选链、空值合并运算符
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
    _fixBabelImports,
    process.env.TERMINAL_TYPE==="mobile" && addPostcssPlugins([
        require("postcss-px2rem")({ remUnit: 37.5 })
    ]),
    // adjust the underlying workbox
    adjustWorkbox(wb =>
        Object.assign(wb, {
            skipWaiting: true,
            exclude: (wb.exclude || []).concat("index.html")
        })
    )
);