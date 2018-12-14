/*eslint-disable */
const {readdirSync, lstatSync} = require("fs");
const {join} = require("path")
const chalk = require("chalk")
const {spawn}= require('child_process')

const sourceDir = join(__dirname, '..', 'src')
const buildDir = join(__dirname, '..', 'lib')

const files = readdirSync(sourceDir);

listModules(files)

function listModules(files) {
  const filteredFolder = files.filter(item => {
    let itemPath = join(sourceDir, item)
    return (
      new RegExp(/^(?!.*images|styles).*$/g).test(item) &&
      lstatSync(itemPath).isDirectory()
    );
  });
  console.log("==========Components Builded=========");
  console.log(chalk.green(filteredFolder.join("\n")));
  console.log("=====================================");
}

const addProcess = spawn('git', ['add', buildDir])
addProcess.addListener('close', (code) => {
  if(code === 0) {
    console.log('lib added successfully')
  } else {
    console.log('some error occurred')
  }
})
