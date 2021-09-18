// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
    chainWebpack: config => {
        if (process.env.NODE_ENV == "production") {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },
    productionSourceMap: process.env.NODE_ENV != "production",
}