const webpack = require("webpack");
const serve = require("webpack-serve");

module.exports = () => serve({
    config: require("./config/dev.config")
});
