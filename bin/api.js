const app = require("../src/main/app");
const { cellar, host, port } = require("../config/db/db.json");

const webpackDevServer = require("../dev/webpack/dev.server");

// turn on the dev server
webpackDevServer();

/**
 * Start the application
 */
app({
    appPort: 1337,
    db: { host, port, cellar }
});


