'use strict';

const messageModel = require('../../models/message.models');
const userModel = require('../../models/user.models');

//Event handlers

exports.addToDB = (id) => {
  try {
    return addUser(id);
  } catch (error) {
    console.error(error);
  }
};

exports.welcomeClient  = (data) => {
  try {
    const message = messageModel.welcomeMessage;
    return { message: message, sender: 'server' };
  } catch (error) {
    console.error(error);
  }
};

exports.sendMessageToClient  = (data, id) => {
  try {
    if (userModel.main_room.length === 1) {
      const messageCount = getMessageCount(id);
      const message = messageModel.chatMessages[messageCount];
      return {
        message: message,
        sender: 'server'
      };
    }
    return {
      message: data
    };
  } catch (error) {
    console.error(error);
  }
};

exports.onClientDisconnect = (id) => {
  const updatedClientList = removeUser(id);
  return updatedClientList;
};

//Helper functions

function addUser (id) {
  userModel.main_room.push({ id, messageCount: 0 });
  return userModel.main_room;
}

function removeUser (id) {
  let index = userModel.main_room.map(el => el.id).indexOf(id);
  userModel.main_room.splice(index, 1);
  return userModel.main_room;
}

function getMessageCount (id) {
  const length = messageModel.chatMessages.length;
  const user = userModel.main_room.find(el => el.id === id);
  const messageCount = user.messageCount;
  messageCount < length - 1
    ? user.messageCount++ : user.messageCount;
  return messageCount;
}