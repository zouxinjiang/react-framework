const path = require("path");
const { webpack } = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        index: "./src/main.jsx",
    },
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        static: {
            directory: path.join(__dirname, 'public')
        },
        proxy: {},
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.css', '.json'],
    },
    module: {
        rules: [
            {
                test: [/\.css$/, /\.less$/],
                use: ['css-loader', 'style-loader', 'less-loader'],
            }, {
                test: [/\.(png|svg|jpg|gif)$/],
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]-[hash:8].[ext]",
                        outputPath: "images/",
                    },
                },
            }, {
                test: [/\.(jsx|js)$/],
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, 'public'),
                to: path.join(__dirname, "dist"),
            }]
        })
    ],
}