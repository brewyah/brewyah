const app = require("../src/main/app");
const { cellar, host, port } = require("../config/db/db.json");

/**
 * Start the application
 */
app({
  port: 1337,
  dbUrl: `mongodb://${host}:${port}/${cellar}`
});