const { ApolloServer, gql } = require('apollo-server')
const PORT = process.env.PORT || 3000;

const typeDefs = gql(`
type Query {
    version: Float!
} 
`)

const resolvers = {
    Query: {
        version: () =>1.0,
    },
}

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
})

server.listen(PORT, () => console.log(PORT))