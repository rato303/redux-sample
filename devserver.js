var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var express = require('express');
var port = 8080;
var app = express();

Object.keys(config.entry).forEach(function(key) {
  config.entry[key].unshift(
    'webpack-hot-middleware/client'
  );
});

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
];

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
