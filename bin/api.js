const app = require("../src/main/app");

const webpackDevServer = require("../dev/webpack/dev.server");

// turn on the dev server
webpackDevServer();

/**
 * Start the application
 */
app({appPort: 1337});


