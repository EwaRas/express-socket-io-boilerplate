'use strict'

const exampleController = require('../controllers/example.controllers');

module.exports = (Router) => {
  const router = Router();
  router.route('/example')
    .get(exampleController.getExample)
    .post(exampleController.postExample);
  return router;
}

