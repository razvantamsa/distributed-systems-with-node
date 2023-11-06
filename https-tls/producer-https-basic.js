const fs = require('fs');
const server = require('fastify')({
    https: {
        key: fs.readFileSync('./tls/private-key.key'),
        cert: fs.readFileSync('./tls/certificate.cert'),
    }
})

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '4000';

server.get('/recipes/:id', async(req, reply) => {
    const id = Number(req.params.id);

    if(id !== 42) {
        reply.statusCode = 404;
        return { error: 'Not found' };
    }

    return {
        producer_pid: process.pid,
        recipe: {
            id,
            name: 'Chicken Tikka Masala',
            steps: 'Throw it in a pot...',
            ingredients: [
                { id: 1, name: 'Chicken', quantity: '1 lb'},
                { id: 2, name: 'Sauce', quantity: '2 cups'},
            ]
        }
    }
});

server.listen({
    port: PORT,
    host: HOST
},
() => console.log(`Producer running at http://${HOST}:${PORT}`)
);