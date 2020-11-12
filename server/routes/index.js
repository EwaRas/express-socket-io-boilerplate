const fs = require('fs');
const path = require('path');
const Router = require('express').Router;

async function routerMiddleware (app) {
  const appRouter = Router();

  try {
    fs
      .readdirSync(__dirname)
      .filter(file => file !== 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js')
      .forEach(async file => {
        const pathRouter = require(path.join(__dirname, file))(Router);
        await appRouter.use(pathRouter);
      });
    await app.use(appRouter);
  } catch (error) {
    console.log(error);
  }
};

module.exports = routerMiddleware;



