// /*eslint-disable */
const {readdirSync, lstatSync} = require("fs");
const {join} = require("path")
const chalk = require("chalk")

const buildDir = join(__dirname, "..", "lib")

// generating index file
const files = readdirSync(buildDir, generateIndexFile);

generateIndexFile(files)

function generateIndexFile(files) {
  const filteredFolder = files.filter(item => {
    let itemPath = join(buildDir, item)
    return (
      new RegExp(/^(?!.*images|styles).*$/g).test(item) &&
      lstatSync(itemPath).isDirectory()
    );
  });
  console.log("==========Components Builded=========");
  console.log(chalk.green(filteredFolder.join("\n")));
  console.log("=====================================");
}
