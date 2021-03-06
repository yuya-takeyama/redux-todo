var express = require('express');
var app = express();
var port = process.env.PORT || 8081

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
} else {
  var webpack = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var config = require('./webpack.config')

  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
}

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://local.dev:%s/ in your browser.", port, port)
  }
})
