const server = require('fastify')();
const https = require('https');
const fetch = require('node-fetch');
const fs = require('fs');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;
const TARGET = process.env.TARGET || 'localhost:4000';

const options = {
    agent: new https.Agent({
        ca: fs.readFileSync('./tls/certificate.cert'),
    }),
};

server.get('/', async () => {
    const data = await fetch(`https://${TARGET}/recipes/42`, options);

    return {
        consumer_pid: process.pid,
        producer_data: await data.json(),
    }
});

server.listen({
        port: PORT,
        host: HOST
    },
    () => console.log(`Consumer running at http://${HOST}:${PORT}`)
);