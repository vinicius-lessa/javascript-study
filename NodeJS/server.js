// This is a simple HTTP server using Node.js
//  To run this server, follow these steps:
//      1. Run the CLI command: node server.js
//      2. Open a web browser and go to http://127.0.0.1:3000/

// const { createServer } = require('http'); // CommonJS syntax
import http from 'node:http'; // ES Module syntax

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    
    // Request usage examples
    const url = request.url;         // if the URL is http://127.0.0.1:3000/api/data, then url will be '/api/data'
    const method = request.method;   // GET, POST, etc.
    const headers = request.headers; // an object containing the request headers (such as 'Content-Type', 'User-Agent', etc.)
    
    // Response usage examples
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is some data\n');
    response.end('This is the end of the response', 'utf-8', () => {
        console.log('Response has been sent to the client');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});