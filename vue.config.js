// vue.config.js
module.exports = {
    publicPath: '/addons/YourAddons/admin',
    devServer: {
        proxy: {
            '/backend': {
                target: 'http://127.0.0.1:8000/', //对应自己的接口
                changeOrigin: true,
                ws: true
            }
        }
    }
}