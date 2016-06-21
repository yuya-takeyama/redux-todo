var path              = require('path');
var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: (process.env.NODE_ENV === 'production' ? 'javascripts/[name]-[hash].js' : 'javascripts/[name].js')
  },
  module: {
    loaders: [
      { test: /\.js$/,                   loaders: ['babel?cacheDirectory', 'strict'], exclude: /node_modules/ },
      { test: /\.jsx$/,                  loaders: ['babel?cacheDirectory', 'strict'], exclude: /node_modules/ },
      { test: /\.css$/,                  loaders: ['style', 'css', 'postcss'] },
      { test: /\.sass$/,                 loaders: ['style', 'css', 'postcss', 'sass?indentedSyntax'] },
      { test: /\.(jpe?g|png|gif)$/i,     loaders: ['url?limit=1000'] },
      { test: /\.json$/,                 loaders: ['json'] },
      { test: /\.html$/,                 loaders: ['html'] }
    ],
    postLoaders: [
      { loader: 'transform?envify' }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'app')
    ],
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({ 'react': 'react/addons' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: (process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'inline-source-map'),
  postcss: function () {
    return [autoprefixer];
  }
};

if (process.env.NODE_ENV !== 'test') {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'public/index.html',
      template: 'app/assets/index.html'
    })
  );
}

module.exports = config;
