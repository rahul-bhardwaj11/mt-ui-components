/*eslint-disable */
const fs = require('fs');
const chalk = require("chalk");

fs.readdir('./lib', (err, files) => {
  if (err) return console.log(err);
  const filteredFolder = files.filter(item => new RegExp(/^(?!.*images|styles).*$/g).test(item));
  console.log("==========Components Builded=========")
  console.log(chalk.green(filteredFolder.join('\n')));
  console.log("=====================================");
});

/*eslint-enable */
