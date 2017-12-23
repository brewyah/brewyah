const app = require("../src/main/app");
const { cellar, host, port } = require("../config/db/db.json");

/**
 * Start the application
 */
app({
    appPort: 1337,
    db: { host, port, cellar }
});
