'use strict';

const express = require('express');
const cors = require('cors');
const routerMiddleware = require('./routes/REST_routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../public'));

routerMiddleware(app);

module.exports = app;
