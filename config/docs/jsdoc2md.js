const path = require("path");
const process = require("process");
const { writeFile } = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");

const cwd = process.cwd();

/**
 * Generate the output path to the final documentation file destination
 * @function outputPath
 * @returns {String}
 */
const outputPath = () => path.resolve(cwd, "docs", "api.md");

const sourceFiles = () => path.resolve(cwd, "src", "**/*");

const jsdocConf = () => path.resolve(cwd, "config", "docs", "jsdoc.conf.json");

const options = {
    files: [sourceFiles()],
    configure: jsdocConf(),
    "module-index-format": "table",
    "module-index-format": "table",
    "param-list-format": "table",
    "property-list-format": "table",
    "member-index-format": "table",
    separators: true
};


jsdoc2md.render(options)
    .then((md) => new Promise((resolve, reject) => {
        writeFile(outputPath(), md, "utf8", (err) => {
            if (err) {
                reject(err);
            }
            process.exit(0);
        });
    }))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
