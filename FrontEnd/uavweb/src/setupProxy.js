const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',  // --> 凡是以'/api'开头的，都映射到'http://localhost:8080'
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};
