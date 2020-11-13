'use strict'

// emit the event from the server to the rest of the users
// emit > to all sockets
// broadcast.emit > send to all but the emitting socket

exports.onClientDisconnect = function (data) {
  const _id = this.id;
  console.log('Socket disconnected && disconnected socket id: ', _id);
}

exports.onClientSayHello = function (data) {
  console.log('Message from Client>>>' + data);
  //console.log('this ',this);
  this.emit('onClientSayHello', 'Can you hear me there?');
}