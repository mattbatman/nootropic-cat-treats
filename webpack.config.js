const webpack = require('webpack');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = env => ({
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['@cycle/dom', '@cycle/run', 'xstream']
  },
  output: {
    path: resolve(__dirname, 'docs'),
    filename: 'bundle.[name].[chunkhash].js'
  },
  devtool: env.prod ? 'none' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true
    }),
    env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    env.prod ? new CnameWebpackPlugin({
      domain: 'nootropiccattreats.space'
    }) : undefined
  ].filter(p => !!p)
});
