const webpack = require('webpack');
const CnameWebpackPlugin = require('cname-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { resolve } = require('path');

const devConfig = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: resolve(__dirname, 'docs'),
    filename: 'bundle.[name].[chunkhash].js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'docs'),
    port: 9999
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
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
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true
    })
  ].filter(p => !!p)
};

const prodConfig = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['prop-types', 'react', 'react-dom', 'react-redux', 'redux', 'reselect']
  },
  output: {
    path: resolve(__dirname, 'docs'),
    filename: 'bundle.[name].[chunkhash].js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'docs'),
    port: 9999
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
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
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash].css',
      allChunks: true
    }),
    new CnameWebpackPlugin({
      domain: 'nootropiccattreats.space'
    })
  ].filter(p => !!p)
};

function loadConfig(env) {
  return env.prod ? prodConfig : devConfig;
}

module.exports = env => loadConfig(env);
