const { ApolloServer } = require('apollo-server');
// define schema
const typeDefs = `
  type Photo{
    id: ID!
    url: String!
    name: String!
    description: String
  }
  type Query {
    totalPhotos: Int!
    allPhotos: [Photo!]!
  }
  type Mutation {
    postPhoto(name: String! description: String): Photo!
  }
`;
var _id = 0;
var photos = [];

// define resolver
const resolvers = {
  Query: {
    totalPhotos: () => photos.length,
    allPhotos: () => photos
  },
  Mutation: {
    postPhoto(parent, args) {
      var newPhoto = {
        id: _id++,
        ...args
      };
      photos.push(args);
      return newPhoto;
    }
  },
  Photo: {
    url: parent => `http://locallhost:4000/img/${parent.id}.jpeg`
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
