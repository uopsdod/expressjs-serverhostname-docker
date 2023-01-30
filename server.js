'use strict';
const loadTestingService = require("./loadtesting.js");

const express = require('express');
const os = require("os");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';
var isHealthy = true;
var isDependancyHealthy = true;

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

// for healthcheck demo
app.get(`/healthcheck`, (req, res) => {
  if (isHealthy == false) {
    throw new Error('BROKEN') // Express will catch this on its own
  }
  res.send(`OK\n`);
});

app.get(`/healthcheck_switchstatus`, (req, res) => {
  if (isHealthy) {
    isHealthy = false;
  }else {
    isHealthy = true;
  }
  res.send(`isHealthy value switched to ${isHealthy}.\n`);
});

app.get(`/healthcheck_dependency`, (req, res) => {
  res.send(`All OK\n`);
});

app.get(`/healthcheck_dependency_switchstatus`, (req, res) => {
  if (isDependancyHealthy) {
    isDependancyHealthy = false;
  }else {
    isDependancyHealthy = true;
  }
  res.send(`isDependancyHealthy value switched to ${isDependancyHealthy}.\n`);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
