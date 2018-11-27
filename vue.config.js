// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './',
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
            plugins: ['vux-ui']
        })


    }
};
