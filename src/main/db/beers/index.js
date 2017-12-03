/**
 * @module brew/db/beers
 */
const Beers = require("./Beers");
const createCollection = require("./createCollection");

module.exports = {
  Beers,
  db: {
    createCollection
  }
};
