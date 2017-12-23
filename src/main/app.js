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
const { open } = require("./db/util");

const {
    logging
} = require("./middleware");

/**
 * @function startApp
 * @param {Number} port - The port on which the app will run
 * @param {dbUrl} dbUrl - The url at which the database resides
 * @returns {undefined}
 */
const startApp = async ({ appPort, db: { host, port, cellar } }) => {
    /**
     * @constant {external:MongoDb.Db} module:brew/app~db
     */
    const db = await open({ host, port, cellar });

    /**
     * @constant {Koa} module:brew/app~app
     */
    const app = new Koa();

    // Add logging to the application
    logging({ app });

    // Add the beer router
    const apiRouter = api({ db });

    // Hook up the api to the application
    app.use(apiRouter.routes());

    // Tell the app which methods are allowed
    app.use(apiRouter.allowedMethods());

    // Alert the world that we're listening on a certain port
    console.log(`Listening on port: ${appPort || 8000}`);

    app.listen(appPort || 8000);
};

/**
 * @alias module:brew/app
 */
module.exports = startApp;
