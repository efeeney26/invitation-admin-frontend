const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
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
