const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware({
        '/jian': {
            target: 'https://www.jianshu.com/asimov', //目标地址
            changeOrigin: true,
            ws: true,
            pathRewrite: { '^/jian': "" }
        }
    }))
    app.use(createProxyMiddleware({
        '/zhi': {
            target: 'https://news-at.zhihu.com/api/4', //目标地址
            changeOrigin: true,
            ws: true,
            pathRewrite: { '^/zhi': "" }
        }
    }))
}