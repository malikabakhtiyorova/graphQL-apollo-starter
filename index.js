const { ApolloServer, gql } = require('apollo-server')
const PORT = process.env.PORT || 5000;
const { users, tweets } = require('./data')

const typeDefs = gql(`
type Query {
    version: Float!
    users: [User!]!
    tweets: [Tweet!]!
} 
type Tweet {
    id: Int!
    message: String!
    date: String!
    receiver: User!
}

type User {
    id: Int!
    username: String!
    age: Int
    tweets: [Tweet!]!
}
`)

const resolvers = {
    Query: {
        version: () =>1.0,
        users: () => users,
        tweets: () => tweets
    },
    User: {
        tweets: (global) => {
           return tweets.filter(tweet => tweet.from === global.id)
        }
    },
    Tweet: {
        receiver: (global) => {
            return users.find(user => user.id === global.to)
        }
    }
}

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
})

server.listen(PORT, () => console.log(PORT))