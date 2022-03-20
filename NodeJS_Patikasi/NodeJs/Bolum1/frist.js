const http = require('http');
const hostname = '127.0.0.1';
const port = 3000 || process.env.port;

const server = http.createServer((requestObject, responseObject) => {
    responseObject.statusCode = 200;
    responseObject.setHeader('Content-Type', 'text/plain');
    responseObject.end('Hello NodeJs');
});

server.listen(port, hostname, function() {
    console.log(`Sunucu şu adreste koşuyor: ${hostname}:${port}/`);
});