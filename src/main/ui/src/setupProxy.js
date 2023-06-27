const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/city',
        createProxyMiddleware( {
            target: 'http://localhost:8080',
             changeOrigin: true
        })
    );
    app.use(
        '/ride',
        createProxyMiddleware( {
            target: 'http://localhost:8080',
             changeOrigin: true
        })
    );
};