'use strict';

const express = require('express');
const cors = require('cors');
const routerMiddleware = require('./server/routes');


const app = express();

app.use(cors());
app.use(express.json());

routerMiddleware(app);

module.exports = app;
