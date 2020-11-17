'use strict'

const messageModel = require('../models/message.models');

exports.getMessage = async (req, res) => {
  try{
    const data = await messageModel.welcomeMessage;
    res.status(200);
    res.send(JSON.stringify(data))
  } catch (error) {
    res.sendStatus(500);
  }
};
exports.postMessage = async (req, res) => {
  try{
    const messageToPost = req.body;
    const data = await messageModel.userMessages.push(messageToPost);
    res.status(201);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
