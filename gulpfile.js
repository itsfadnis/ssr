var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('bundle:assets', function(cb) {
  var config = require('./webpack.prod');
  webpack(config, cb);
});

gulp.task('serve:assets', function() {
  var config = require('./webpack.dev');
  var host = config.devServer.host;
  var port = config.devServer.port;

  // https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
  Object.keys(config.entry).forEach(function(key) {
    config.entry[key] = [
      'webpack-dev-server/client?http://' + host + ':' + port,
      config.entry[key]
    ]
  });

  return new WebpackDevServer(
    webpack(config), config.devServer
  ).listen(port, host, function(err, result) {
    if (err) throw err;

    console.log('Webpack dev server running on http://' + host + ':' + port);
  });
});
