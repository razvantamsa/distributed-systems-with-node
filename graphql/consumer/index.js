const server = require('fastify')();
const axios = require('axios');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';
const TARGET = process.env.TARGET || 'localhost:4000';

const gqlQuery = `
  query kitchenSink($id: ID) {
    recipe(id: $id) {
      id
      name
      ingredients {
        name
        quantity
      }
    }
  }
`;

server.get('/:id', async (request, reply) => {
    const response = await axios.post(
        `http://${TARGET}/graphql`,
        {
          query: gqlQuery,
          variables: { id: request.params.id },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

    return {
        consumer_pid: process.pid,
        data: response.data,
    }
})

server.listen({port: PORT, host: HOST,}, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on http://${HOST}:${PORT}`);
});