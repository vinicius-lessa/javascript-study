// This is a simple HTTP server using Node.js
//  To run this server, follow these steps:
//      1. Run the CLI command: node server.js
//      2. Open a web browser and go to http://127.0.0.1:3000/

// const { createServer } = require('http'); // CommonJS syntax
import http from 'node:http'; // ES Module syntax
import { setTimeout } from 'node:timers/promises';

const HOST = '127.0.0.1';
const PORT = 3000;

const server = http.createServer(async (request, response) => {
    
    // Request usage examples
    const url = request.url;         // if the URL is http://127.0.0.1:3000/api/data, then url will be '/api/data'
    const method = request.method;   // GET, POST, etc.
    const headers = request.headers; // an object containing the request headers (such as 'Content-Type', 'User-Agent', etc.)
    
    // Response usage examples
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    // Could use writeHead instead
    // response.writeHead(200, { 'Content-Type': 'application/json' });    

    // File Paths
    const __root = process.cwd()                                // workdir abs path where node.js was started (e.g. C:/user/repos/project)
    const __dirname = import.meta.dirname                       // current file abs path (e.g. C:/user/repos/project/src)
    const __relPath = path.join('src', 'index.html')            // rel path from root (e.g. /project/src/index.html)
    const __absPath = path.join(__dirname, 'src', 'index.html') // abs path of file (e.g. C:/user/repos/project/src/index.html)
    
    const booksData = await booksFromDb();
    response.write(JSON.stringify(booksData));

    response.end(() => {
        console.log('Response has been sent to the client');
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

// Mimicks a database call (async can be omitted since the function returns a promise)
const booksFromDb = async () => {
    await setTimeout(1000); // Simulate a delay of 1 second

    return [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' }
    ];

    // Vanilla JS version
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         console.log('Simulating a database call...');

    //         resolve([
    //             { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    //             { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    //             { title: '1984', author: 'George Orwell' }
    //         ]);
    //     }, 1000);
    // });
};