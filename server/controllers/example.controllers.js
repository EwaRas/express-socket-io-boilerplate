'use strict'

const exampleModel = require('../models/example.models');

exports.getExample = (req, res) => {
  //TODO complete model
  try{
    const data = '/example getting stuff';
    res.status(200);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
exports.postExample = (req, res) => {
  //TODO complete model
  try{
    const data = '/example posting';
    res.status(201);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
