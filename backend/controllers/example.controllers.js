'use strict';

const exampleModel = require('../models/example.models');

exports.getExample = (req, res) => {
  //TODO complete model
  try {
    const data = '/example getting stuff';
    res.status(200);
    //res.send(JSON.stringify(data));
    res.sendFile('/home/ewa/codeworks/express-socket-io-template/client/example.html');
  } catch (error) {
    res.sendStatus(500);
  }
};
exports.postExample = (req, res) => {
  //TODO complete model
  try {
    const data = '/example posting';
    res.status(201);
    res.send(JSON.stringify(data));
  } catch (error) {
    res.sendStatus(500);
  }
};
