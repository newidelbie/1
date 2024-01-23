const express = require('express')
const app = express()
const port2 = 5050
const http = require("http");

const host = 'localhost';
let port = 5000

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});

require('./index.js');
