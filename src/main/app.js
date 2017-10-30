const Koa = require("koa");

module.exports = ({ port }) => {
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = "Hello World";
  });

  console.log(`Listening on port: ${port || 8000}`)
  app.listen(port || 8000);
};