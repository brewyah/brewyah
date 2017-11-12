const Router = require("koa-router");

const beerRouter = new Router()
      .get("/", (ctx, next) => {
	  console.log("In beerRouter");
	  next();
      })
      .get("/:id", (ctx, next) => {
	  console.log(`id: ${ctx.params.id}`);

	  ctx.response.body = {
	      hello: "world"
	  };

	  next();
      });

module.exports = beerRouter;
