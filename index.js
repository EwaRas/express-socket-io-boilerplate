'use strict'

require('dotenv').config();
const http = require('http');
const server = require('./server.js');
const socket_io = require('socket.io');
let io;


const hostname = process.env.HOST;
const port = process.env.PORT;

async function bootstrap () {
    /**
   * Add external services init as async operations (db, redis, etc...)
   * e.g.
   * await sequelize.authenticate()
   */
  return http.createServer(server).listen(port);
}

bootstrap()
    .then(server => {
      io = socket_io(server);
      console.log(`Server listening at http://${hostname}:${server.address().port}`);
    })
    .catch(error => {
      setImmediate(() => {
        console.error( 'Server Error:');
        console.error(error);
        process.exit();
      });
    });

module.exports = io;