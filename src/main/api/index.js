const Router = require("koa-router");
const beers = require("./beers");

module.exports = ({ db }) => {
    console.log("Setting up API");

    const api = new Router({ prefix: "/api" });

    const beersRouter = beers({ db });

    // Hook up the Beers API
    api.use(
        "/beers",
        beersRouter.routes(),
        beersRouter.allowedMethods()
    );

    return api;
};
