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
const logger = require("koa-logger");
const { open } = require("./db/util");

/**
 * @function startApp
 * @param {Number} port - The port on which the app will run
 * @param {dbUrl} dbUrl - The url at which the database resides
 * @returns {undefined}
 */
const startApp = ({ appPort, db: { host, port, cellar } }) => {
    /**
     * @constant {Koa} module:brew/app~app
     */
    const app = new Koa();

    app.use(logger());

    open({ host, port, cellar })
        .then(db => api({ db }))
        .then(apiRouter => {
            // Hook up the api to the application
            app.use(apiRouter.routes());

            // Tell the app which methods are allowed
            app.use(apiRouter.allowedMethods());
        });

    // Alert the world that we're listening on a certain port
    console.log(`Listening on port: ${appPort || 8000}`);

    return app.listen(appPort || 8000);
};

/**
 * @alias module:brew/app
 */
module.exports = startApp;
