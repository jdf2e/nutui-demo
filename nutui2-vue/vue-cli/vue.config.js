module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                prependData: ` 
                @import "@/assets/custom_theme.scss";
                @import "@nutui/nutui/dist/styles/index.scss";
                `,
            },
            postcss: {
                plugins: [
                    require('autoprefixer')({ // 配置使用 autoprefixer
                        // browsers: ['last 20 versions'],
                        overrideBrowserslist: ['last 20 versions'] // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变
                    })
                ]
            }
        },
    }
}