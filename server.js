'use strict';
const loadTestingService = require("./loadtesting.js");

const express = require('express');
const os = require("os");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
const stage = "replaced_this_with_stage";

// for ingress-hostname demo
app.get('/', async (req, res) => {
  var process_ms = req.query.process_ms?req.query.process_ms:0;
  console.log("processing request ...");
  await loadTestingService.loadtesting(process_ms);
  console.log(`processed request in ${process_ms} ms`);
  res.send(`[${stage}] served by: ${os.hostname()}\n`);
});

// for ingress-path demo
app.get(`/${stage}`, (req, res) => {
  res.send(`[${stage}] served by: ${os.hostname()}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
