const server = require('fastify')();
const graphql = require('fastify-gql');
const fs = require('fs');

const gqlSchema = fs.readFileSync(__dirname + '/../graphql-schema.gql').toString();
const resolvers = require('./resolvers');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '4000';


server
    .register(graphql, {
    schema: gqlSchema,
    resolvers,
    graphiql: true,
})
    .listen({port: PORT, host: HOST,}, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on http://${HOST}:${PORT}/graphiql`);
});