'use strict';

const express = require('express');
const os = require("os");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
// /v1/movie/paid
// /v1/movie/free
// /v1/music/paid
// /v1/music/free

// /v2/movie/paid
// /v2/movie/free
// /v2/music/paid
// /v2/music/free
const app = express();
const stage = "replaced_this_with_stage";
app.get('/', (req, res) => {
  res.send(`[${stage}] served by: ${os.hostname()}\n`);
});

app.get('/paid', (req, res) => {
  res.send(`[${stage}][paid] served by: ${os.hostname()}\n`);
});

app.get('/free', (req, res) => {
  res.send(`[${stage}][free] served by: ${os.hostname()}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
