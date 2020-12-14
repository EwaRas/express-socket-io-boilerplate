#!/usr/bin/env node

const createBoilerplate = require('../index.js');
const process = require('process');

// check passed arguments
const args = process.argv.splice(process.execArgv.length + 2);
//get path of directory where the script was called
const callerPath = process.cwd();

let appName = '';

if (args.length > 0) {
  appName = args.map(arg => arg.toLowerCase()).join('_');
} else {
  appName = 'express-socket-io-boilerplate';
}

createBoilerplate(appName, callerPath);