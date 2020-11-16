'use strict';

const userModel = require('../models/user.models');

exports.getUsers = (req, res) => {
  try {
    const data = userModel.reading_room;
    res.status(200);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
exports.postUser = async (req, res) => {
  try {
    const newUser = await userModel.reading_room.push(newUser);
    res.status(201);
    res.send(JSON.stringify(newUser));
  } catch (error) {
    res.sendStatus(500);
  }
};
