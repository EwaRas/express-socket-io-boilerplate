'use strict';

const userController = require('../../controllers/user.controllers');

module.exports = (Router) => {
  const router = Router();
  router.route('/users')
    .get(userController.getUsers)
    .post(userController.postUser);
  return router;
};

