var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('bundle:assets', function(cb) {
  var config = require('./webpack.config');

  webpack(config, cb);
});

gulp.task('serve:assets', function() {
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: '/assets',
    hot: true,
    stats: {
      assets: true,
      colors: true,
      version: true
    }
  }).listen(8081, 'localhost', function(err, result) {
    if (err) throw err;

    console.log('Webpack dev server running on http://localhost:8081');
  });
});
