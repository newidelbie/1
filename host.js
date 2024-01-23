const express = require('express')
const app = express()
const port2 = 3000

const host = 'localhost';
let port = process.env.PORT || 3000

const http = require('http')

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});

require('./index.js');
