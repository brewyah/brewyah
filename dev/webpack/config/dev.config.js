const path = require("path");
const webpack = require("webpack");
const webpackBase = require("./base.config");

module.exports = webpackBase({
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    mode: "development"
});
