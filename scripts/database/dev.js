const {exec} = require("child_process");

/**
 * Execute a task
 * @function execP
 * @param {string} task
 * @returns {Promise<number>}
 */
const execP = (task) => new Promise((resolve, reject) => {
    // Fail
    if (typeof task !== "string") {
        console.error(
            new TypeError(`invalid arguments. Expect arg[0] to be typeof "string"; got ${typeof task}`)
        );
        reject(1);
    }

    // Print out the task about to be run
    console.log(`\n> ${task}`);

    // Create the subprocess
    const child = exec(task);

    // Pipe standard out to the log
    child.stdout.on("data", data => console.log(`\t${data}`));

    // Pipe standard error out to the log
    child.stderr.on("data", data => console.log(`\t${data}`));

    // Log out the exit code/signal
    child.on("exit", (code, signal) => {
        console.log(`Exiting "${task}" with \n\tCode: ${code}\n\tSignal: ${signal}`);
        // (code === 0) ? resolve(code) : reject(code);
        resolve(code || 0);
    });
});

/**
 * Synchronize a whole bunch of tasks
 * @function pipe
 * @param {...string} tasks
 * @returns {Promise<number>}
 */
const pipe = (...tasks) => tasks
    .reduce((taskChain, task) => taskChain.then(() => execP(task)), Promise.resolve());

/**
 * 1. Drop the db configuration
 * 2. Create the db config
 */
pipe(
    "db-migrate db:drop dev -v",
    "db-migrate db:create dev -v"
)
    .then(() => (process.exitCode = 0))
    .catch((code) => (process.exitCode = code))
    .then(() => console.log(`Exiting with ${process.exitCode}`));
