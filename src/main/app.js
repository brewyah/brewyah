/**
 * @module brew/app
 * @external Koa
 * @see {@link https://github.com/koajs/koa/blob/master/docs/api/index.md|Koa}
 */

/**
 * @class module:brew/app~Koa
 * @alias external:Koa
 */
const path = require("path");
const Koa = require("koa");
const { createReadStream } = require("fs");
const logger = require("koa-logger");

/**
 * @function startApp
 * @param {Number} port - The port on which the app will run
 * @param {dbUrl} dbUrl - The url at which the database resides
 * @returns {undefined}
 */
const startApp = async ({appPort, db: {host, port, cellar}}) => {
    /**
     * @constant {Koa} module:brew/app~app
     */
    const app = new Koa();

    app.use(logger());

    app.use(async (ctx, next) => {
        console.log(ctx.mongo);
        ctx.type = "html";
        ctx.body = createReadStream(path.resolve(__dirname, "../../public/index.html"));
    });

    // Alert the world that we're listening on a certain port
    console.log(`Listening on port: ${appPort || 8000}`);

    return app.listen(appPort || 8000);
};

/**
 * @alias module:brew/app
 */
module.exports = startApp;
