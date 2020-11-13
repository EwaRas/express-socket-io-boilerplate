'use strict'

const eventHandlers = require('./eventHandlers');

function onSocketConnection (socket) {
  socket.on('disconnect', eventHandlers.onClientDisconnect);
  socket.on('clientSayHello', eventHandlers.onClientSayHello);
};

module.exports = onSocketConnection;