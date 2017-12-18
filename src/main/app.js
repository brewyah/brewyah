/**
 * @module brew/app
 * @external Koa
 * @see {@link https://github.com/koajs/koa/blob/master/docs/api/index.md|Koa}
 */

/**
 * @class module:brew/app~Koa
 * @alias external:Koa
 */
const Koa = require("koa");
const api = require("./api");

const {
    logging
} = require("./middleware");

/**
 * @function startApp
 * @param {Number} port - The port on which the app will run
 * @param {dbUrl} dbUrl - The url at which the database resides
 * @returns {undefined}
 */
const startApp = ({ port, dbUrl }) => {
    /**
     * @constant {external:MongoDb.Db} module:brew/app~db
     */
    const db = require("./db/connect")({ url: dbUrl });

    /**
     * @constant {Koa} module:brew/app~app
     */
    const app = new Koa();

    // Add logging to the application
    logging({ app });

    // Add the beer router
    api({ app });

    // Alert the world that we're listening on a certain port
    console.log(`Listening on port: ${port || 8000}`);

    app.listen(port || 8000);
};

/**
 * @alias module:brew/app
 */
module.exports = startApp;
