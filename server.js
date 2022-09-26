'use strict';

const express = require('express');
const os = require("os");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
const version = "replaced_this_with_app_version";
app.get('/', (req, res) => {
  res.send(`[${version}]hostname: ${os.hostname()}`);
});

app.get('/buyer', (req, res) => {
  res.send(`[${version}][buyer]hostname: ${os.hostname()}`);
});

app.get('/seller', (req, res) => {
  res.send(`[${version}][seller]hostname: ${os.hostname()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
