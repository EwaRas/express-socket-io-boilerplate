'use strict';

const io = require('socket.io')();
const connectionHandler = require('./connectionHandler');

io.on('connection', connectionHandler);

// io.on('connection', (socket) => {});
// io.of('/admin').on('connection', (socket) => {});

module.exports = io;

