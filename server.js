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
const version = "replaced_this_with_app_version";
app.get('/', (req, res) => {
  res.send(`[${version}] served by: ${os.hostname()}`);
});

app.get('/movie', (req, res) => {
  res.send(`[${version}][movie] served by: ${os.hostname()}\n`);
});

app.get('/movie/paid', (req, res) => {
  res.send(`[${version}][movie][paid] served by: ${os.hostname()}\n`);
});

app.get('/movie/free', (req, res) => {
  res.send(`[${version}][movie][free] served by: ${os.hostname()}\n`);
});

app.get('/music/', (req, res) => {
  res.send(`[${version}][music] served by: ${os.hostname()}\n`);
});

app.get('/music/paid', (req, res) => {
  res.send(`[${version}][music][paid] served by: ${os.hostname()}\n`);
});

app.get('/music/free', (req, res) => {
  res.send(`[${version}][music][free] served by: ${os.hostname()}\n`);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
