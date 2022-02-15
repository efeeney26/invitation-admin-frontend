const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const {
  NODE_ENV = 'development'
} = process.env

const isProductionMode = NODE_ENV === 'production'

module.exports = {
  mode: NODE_ENV,
  devtool: isProductionMode ? false : 'eval-cheap-module-source-map',
  entry: './src/index.tsx',
  module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
              options: {
                ...(isProductionMode ? {} : {
                    getCustomTransformers: () => ({
                      before: [ReactRefreshTypeScript()]
                    })
                }),
                transpileOnly: true
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    ...(isProductionMode ? [] : [
      new ReactRefreshWebpackPlugin()
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
};
