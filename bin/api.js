const vorpal = require("vorpal")();

const app = require("../src/main/app");

vorpal
  .command("server")
  .option("-p, --port", "Specify a port number.")
  .description("Start the server.")
  .action((args, callback) => {
    app({
      port: (args.options.port ? args.options.port : null)
    });

    // callback();
  });