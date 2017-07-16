var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('serve:assets', function() {
  var config = require('./webpack.config.development');
  var host = config.devServer.host;
  var port = config.devServer.port;

  // https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
  config.entry = [
    'webpack-dev-server/client?http://' + host + ':' + port,
    config.entry
  ];

  return new WebpackDevServer(
    webpack(config), config.devServer
  ).listen(port, host, function(err, result) {
    if (err) throw err;

    console.log('Webpack dev server running on http://' + host + ':' + port);
  });
});
