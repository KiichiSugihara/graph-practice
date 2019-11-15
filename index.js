const { ApolloServer } = require('apollo-server');
// define schema
const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
  type Mutation {
    postPhoto(name: String! description: String): Boolean!
  }
`;
var photos = [];

// define resolver
const resolvers = {
  Query: {
    totalPhotos: () => photos.length
  },
  Mutation: {
    postPhoto(parent, args) {
      photos.push(args);
      return true;
    }
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
