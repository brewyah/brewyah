const Router = require("koa-router");
const { Beers } = require("../../db/beers/index");

/**
 * @function beerRouter
 * @function {MongoDb.DB} db
 * @returns {Koa.Router}
 */
const beerRouter = ({ db }) => {
    const beers = new Beers({ db });

    return new Router()
        .get("/", async (ctx, next) => {
            console.log("In beerRouter");

            const beerList = await beers.read();

            ctx.response.body = {
                beers: beerList
            };
            next();
        })
        .get("/:id", (ctx, next) => {
            console.log(`id: ${ctx.params.id}`);

            ctx.response.body = {
                hello: "world"
            };

            next();
        });
};

module.exports = beerRouter;
