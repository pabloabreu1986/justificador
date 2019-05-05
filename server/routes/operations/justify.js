'use-strict';

const express = require('express');
const app = express();
const httpStatusCodes = require('http-status-codes');
const {Justifier} = require('../../lib/justifier');


app.get('/getJustified/:text/:count', (req, res) => {

  const TEXT = req.params.text;
  const LONG = req.params.count;
  const PAT = '_';

  const JUSTIFIED = Justifier(TEXT, LONG, PAT);

  res.json({
    status: httpStatusCodes.OK,
    long: LONG,
    text: JUSTIFIED
  });

});

module.exports = app;