'use-strict';

const express = require('express');
const app = express();
const httpStatusCodes = require('http-status-codes');
const {Justifier} = require('../../lib/justifier');


app.get('/getJustified/{params}', (req, res) => {

  const TEXT = req.params.text;
  const LONG = req.params.count;
  const PAT = req.params.pattern || ' ';

  const JUSTIFIED = Justifier(TEXT, LONG, PAT);

  res.json({
    status: httpStatusCodes.OK,
    long: LONG,
    text: JUSTIFIED
  });

});

module.exports = app;