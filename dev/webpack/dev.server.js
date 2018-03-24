const webpack = require("webpack");
const serve = require("webpack-serve");

const foo = () => new WebpackDevServer(
    webpack(require("./config/dev.config")), {
        historyApiFallback: true,
        contentBase: 'http://localhost:8080',
        hot: true,
        quiet: false,
        noInfo: false,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: 'http://localhost:8080/',
        stats: {colors: true},
    });

module.exports = () => serve({
    config: require("./config/dev.config")
});
