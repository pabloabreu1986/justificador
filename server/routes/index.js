'use-strict';

const express = require('express');
const app = express();

//justifucador
app.use(require('./operations/justify'));

module.exports = app;
