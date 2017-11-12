const Router = require("koa-router");
const beers = require("./beers");

module.exports = ({ app }) => {
    console.log("Setting up API");

    const api = new Router({ prefix: "/api" });

    // Hook up the Beers API
    api.use("/beers", beers.routes(), beers.allowedMethods());

    // Hook up the api to the application
    app.use(api.routes());

    // Tell the app which methods are allowed
    app.use(api.allowedMethods());
};
