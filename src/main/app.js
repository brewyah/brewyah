/**
 * @module brew/app
 * @external Koa
 * @see {@link https://github.com/koajs/koa/blob/master/docs/api/index.md|Koa}
 */

/**
 * @class Koa
 * @alias external:Koa
 */
const Koa = require("koa");
const api = require("./api");

const {
    logging
} = require("./middleware");

module.exports = ({ port, dbUrl: url }) => {
    /**
     * @constant {external:MongoDb.Db} db
     */
    const db = require("./db/connect")({ url });

    /**
     * @constant {Koa} app
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
