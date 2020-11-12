'use strict'

const rootModel = require('../models/root.models');

exports.getRoot = async (req, res) => {
  //TODO complete model
  try{
    const data = await '/root getting stuff';
    res.status(200);
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
  }
};
exports.postRoot = async (req, res) => {
  //TODO complete model
  try{
    const data = await '/root posting stuff';
    res.status(201);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
