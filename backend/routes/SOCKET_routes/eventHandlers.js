'use strict'

// emit the event from the server to the rest of the users
// emit > to all sockets
// broadcast.emit > send to all but the emitting socket

exports.onClientDisconnect = function (data) {
  const _id = this.id;
  console.log('Socket disconnected && disconnected socket id: ', _id);
}

exports.onClientDisconnect = function (data) {
    const _id = this.id;
    console.log('Socket disconnected && disconnected socket id: ', _id);
}

exports.welcomeClient  = function (data) {
  const message = 'Hi there! How are you?';
  this.emit('/root/welcome', message);}

exports.updateChat  = function (data) {
  console.log('Message from Client>>>' + data);
  this.emit('/root/update_chat', getDataFromDataBase)
}

exports.joinRoom  = function (data) {
  const _id = this.id;
  this.emit('/root/join_room', admitToRoom)
}