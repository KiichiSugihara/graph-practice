const { ApolloServer } = require('apollo-server');
// define schema
const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
`;
// define resolver
const resolvers = {
  Query: {
    totalPhotos: () => 42
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// run server
server
  .listen()
  .then(({ url }) => console.log(`GraphQL Service running on ${url}`));
