'use strict'

const eventHandlers = require('./eventHandlers');

function onSocketConnection (socket) {
  socket.on('disconnect', eventHandlers.onClientDisconnect);
  socket.on('/root/welcome', eventHandlers.welcomeClient)
  socket.on('/root/update_chat', eventHandlers.updateChat);
  socket.on('/root/join_room', eventHandlers.joinRoom);
};

module.exports = onSocketConnection;