const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
        rules:[{
            test: /\.txt/,
            loader: "raw-loader",
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader"
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'main.html',
            template: './src/index.html'
          }),
        new MiniCssExtractPlugin(),
      ]
}