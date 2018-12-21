/*
    -------此文件作为webStorm内webpack的配置文件-------
    -------如需配置webpack or vue请到vue.config------
*/
let path = require('path');
module.exports = {
    resolve: {
        extensions: ['', '.js', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "~api": path.resolve(__dirname, "./src/api/part"),
        }
    },
};
