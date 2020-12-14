const shell = require('shelljs');
const fs = require('fs-extra');
const source = __dirname;
const callerPath = process.cwd();
const chalk = require('chalk');
const log = console.log;

async function copyFiles (appName) {
  try {
    await fs.copy(`${source}/src/`, `${process.cwd()}/${appName}/`)
    log(chalk.greenBright('Success! Project folder created...'));
  } catch (err) {
    error('Ops, something went wrong: ', err)
  }
}

async function buildBoilerplate (appName, path) {
  log(chalk.yellow('Creating project: ') + chalk.white.blue.bold(appName));
  await copyFiles(appName,path);
  process.chdir(`${callerPath}/${appName}`);
  log(chalk.blueBright(`Creating a package.json for your ${appName} project...`));
  await shell.exec(`npm init -y`);
  log(chalk.green('Downloading dependencies: express,cors, socket.io, socket.io-client, nodemon'));
  await shell.exec(`npm i express cors socket.io socket.io-client nodemon`);
  log(chalk.red('Initializing git...'));
  await shell.exec(`git init`);
}

module.exports = buildBoilerplate;