const http = require('http');

const host = '127.0.0.1';
const port = process.env.port || 5000;

const server = http.createServer((requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.writeHead(200, { "Content-Type": "text/html", "Charset":"utf-8" });
    if(url === '/') {
        responseObject.write('<h2>Anasayfaya Hoşgeldiniz</h2>');
    } else if(url === '/hakkimda') {
        responseObject.write('<h2>Hakkımdaya Hoşgeldiniz</h2>');
    } else if(url === '/iletisim') {
        responseObject.write('<h2>İletişime Hoşgeldiniz</h2>');
    }
    responseObject.end();
});


server.listen(port, host, () => {
    console.log(`Sunucu, şu adreste koşmaya başladı: ${host}:${port}/`)
})