'use strict';

const messageController = require('../../controllers/message.controllers');

module.exports = (Router) => {
  const router = Router();
  router.route('/')
    .get(messageController.getMessage)
    .post(messageController.postMessage);
  return router;
};

