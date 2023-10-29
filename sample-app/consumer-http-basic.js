const server = require('fastify')();
const axios = require('axios');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;
const TARGET = process.env.TARGET || 'localhost:4000';

server.get('/', async () => {
    const { data: producer_data } = await axios.get(`http://${TARGET}/recipes/42`);

    return {
        consumer_pid: process.pid,
        producer_data,
    }
});

server.listen({
    port: PORT,
    host: HOST
},
() => console.log(`Consumer running at http://${HOST}:${PORT}`)
);