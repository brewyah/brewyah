const logger = require("koa-logger");

const logging = ({ app }) => app.use(logger());

module.exports = logging;
