import { ApolloServer } from 'apollo-server-express';
import express = require('express');
import schema from './graphql/shema';

const app = express();

const apolloServer = new ApolloServer({
  schema,
});

apolloServer.applyMiddleware({ app });

app.listen(8080, () => {
  console.log(`Apollo server ready at http on port ${8080}`);
});
