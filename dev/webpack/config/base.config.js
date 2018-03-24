const path = require("path");

module.exports = (...specs) => Object.assign({
    entry: [
        path.resolve(__dirname, "../../../src/main/ui/BrewYah.js")
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    output: {
        filename: "brewyah.bundle.js",
        publicPath: "/dist"
    },
    mode: "production"
}, ...specs);
