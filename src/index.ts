import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import 'reflect-metadata';

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log(`🚀  Server ready at http://localhost:4000`);
});
