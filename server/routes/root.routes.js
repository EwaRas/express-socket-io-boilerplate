'use strict'

const rootController = require('../controllers/root.controllers');

module.exports = (Router) => {
  const router = Router();
  router.route('/')
    .get(rootController.getRoot)
    .post(rootController.postRoot);
  return router;
}

