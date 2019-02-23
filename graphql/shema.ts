import { makeExecutableSchema } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { importSchema } from 'graphql-import';
import axios from 'axios';

import bookResolver from './resolvers/bookResolver';

const resolvers = {
    Query: {
        book: () => {
            return 'stuff';
        },
        books: async () => {
            const { data } = await axios.get('https://www.anapioficeandfire.com/api/books');
            return data;
        },
      },
};

const typeDefs = importSchema('schema.graphql');
const schema: GraphQLSchema = makeExecutableSchema({
    resolvers,
    typeDefs,
});

export default schema;
