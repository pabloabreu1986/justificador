'use-strict';

const express = require('express');
const app = express();
const httpStatusCodes = require('http-status-codes');
const {Justifier} = require('../../lib/justifier');


app.get('/getJustified', (req, res) => {

  const TEXT = req.body.text;
  const LONG = req.body.long;

  const JUSTIFIED = Justifier(TEXT, LONG);

  res.json({
    status: httpStatusCodes.OK,
    long: LONG,
    text: JUSTIFIED
  });

});

module.exports = app;