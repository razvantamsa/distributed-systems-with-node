const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('----------------------');

    const raw = fs.createReadStream(__dirname + '/index.html');
    const acceptEncoding = request.headers['accept-encoding'] || '';
    const encoding = acceptEncoding.split(',')[0];
    console.log(acceptEncoding, encoding);

    switch(encoding) {
        case 'gzip':
            console.log('encoding with gzip');
            response.setHeader('Content-Encoding', 'gzip');
            raw.pipe(zlib.createGzip()).pipe(response);
            break;
    
        case 'br': 
            console.log('encoding with br');
            response.setHeader('Content-Encoding', 'br');
            raw.pipe(zlib.createBrotliCompress()).pipe(response); 
            break;

        case 'deflate':
            console.log('encoding with deflate');
            response.setHeader('Content-Encoding', 'deflate');
            raw.pipe(zlib.createDeflate()).pipe(response); 
            break;

        default:
            console.log('no encoding');
            response.setHeader('Content-Type', 'text/plain');
            raw.pipe(response);
            break;
    }
});

server.listen(process.env.PORT || 1337);