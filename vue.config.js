// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './',
    // 输出文件目录
    outputDir: '/Users/juner/Documents/pgs-mobile-cordova-project/www',
    devServer: {
        host: "0.0.0.0",
        port: 8080, // 端口号
        public: '0.0.0.0:8080',//公共网络访问地址
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
    },
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui',
                {
                    name: 'less-theme',
                    path: 'src/config/style/theme.less' // 相对项目根目录路径
                }
                ],
        })


    }
};
