const Router = require("koa-router");

const api = new Router({ prefix: "/api" });

const userAPI = new Router({ prefix: "/user" });

userAPI.get("/", async (ctx, next) => {
    ctx.type = "json";
    ctx.body = {"hello": "world"};
});

api.use(userAPI.routes());
