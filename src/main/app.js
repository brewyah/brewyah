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

module.exports = ({ port, dbUrl: url }) => {
  /**
   * @constant {external:MongoDb.Db} db
   */
  const db = require("./db/connect")({ url });

  /**
   * @constant {Koa} app
   */
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = "Hello World";
  });

  console.log(`Listening on port: ${port || 8000}`);
  app.listen(port || 8000);
};