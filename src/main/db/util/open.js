/**
 * @module brew/db/connect
 * @external MongoDB
 * @see {@link http://mongodb.github.io/node-mongodb-native/2.2/api/index.html|MongoDB}
 */
const mongodb = require("mongodb");
const { logAndReject, logAndReturn } = require("../../util/log");

/**
 * @class MongoClient
 * @memberof external:MongoDB
 * @see {@link http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html|MongoClient}
 */
const MongoClient = mongodb.MongoClient;

/**
 * @class Db
 * @memberof external:MongoDB
 * @see {@link http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html|Db}
 */

/**
 * Connect to a running {@link external:MongoDB} database instance
 * @function connect
 * @param {String} url - The URL location of the {@link external:MongoDB} instance
 * @returns {Promise<Db, Error>}
 */
const connect = ({ url }) => new Promise((resolve, reject) => MongoClient
  .connect(url, (err, db) => err ? reject(err) : resolve(db)))
  .then(db => logAndReturn(`Connected to DB at ${url}`, db))
  .catch(logAndReject);

module.exports = async ({ host, port, cellar }) => {
  try {
    return await connect({
      url: `mongodb://${host}:${port}/${cellar}`
    });
  } catch (e) {
    console.log(e);
    throw new Error(`Failed to connect to database at: ${`mongodb://${host}:${port}/${cellar}`}`);
  }
};