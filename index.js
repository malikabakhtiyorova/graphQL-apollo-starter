const { ApolloServer, gql } = require('apollo-server')
const PORT = process.env.PORT || 3000;

const typeDefs = gql(`
type Query {
    version: Float!
    users: [User!]!
} 
type User {
    id: Int!
    username: String!
    age: Int
}
`)

const users = [
    {id: 1, username: 'user1', age: 5},
    {id: 2, username: 'user2', age: null}
]

const resolvers = {
    Query: {
        version: () =>1.0,
        users: () => users
    },
}

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
})

server.listen(PORT, () => console.log(PORT))