'use strict';

const io = require('socket.io')();
const eventHandlers = require('./eventHandlers');

io.on('connection', (socket) => {
  let clients = eventHandlers.addToDB(socket.id);
  const connectedClients = () => clients.length;

  //THIS IS STRANGE!!!!!!! >>> EMIT && BROADCAST EMIT NEEDED FOR IT TO WORK AS EXPECTED
  socket.on('/root/new_socket_connected', (data) => {
    const { message, sender } = eventHandlers.welcomeClient(data);
    const clientCount = connectedClients();
    socket.emit('/root/welcome',  {message, sender, id: socket.id});
    socket.emit('root/update_socket_count', { clientCount });
    socket.broadcast.emit('root/update_socket_count', { clientCount });
  });

  socket.on('/root/new_message', (data) => {
    const message = eventHandlers.sendMessageToClient(data, socket.id);
    socket.emit('/root/update_chat', message);
  });

  socket.on('disconnect', () => {
    clients = eventHandlers.onClientDisconnect(socket.id);
    const clientCount = connectedClients();
    socket.broadcast.emit('root/update_socket_count', { clientCount });
  });

});

module.exports = io;