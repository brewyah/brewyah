const path = require("path");
const webpack = require("webpack");
const webpackBase = require("./base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackBase({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
        })
    ],
    devtool: "inline-source-map",
    mode: "development"
});
