const { ApolloServer, gql } = require('apollo-server')
const PORT = process.env.PORT || 7000;
const { users,
    followers,
} = require('./data')

const typeDefs = gql(`
type Query {
    version: Float!
    users: [User!]!
    followers: [Follower!]!
    followings: [Follower!]!
} 
type Follower {
    id: Int!
    username: User!
    followings: User!
    followers: User!
}

type User {
    id: Int!
    username: String!
    age: Int
    followers: [Follower!]
    followings: [Follower!]
}
`)

const resolvers = {
    Query: {
        version: () =>1.0,
        users: () => users,
        followers: () => followers
    },
    User: {
        followings: (global) => {
           return followers.filter(follower => follower.fw === global.id)
        },
        followers: (global) => {
            return followers.filter(follower => follower.fin === global.id)
         }
    },
    Follower: {
        followings: (global) => {
            return users.find(user => user.id === global.fin)
        },
        followers: (global) => {
            return users.find(user => user.id === global.fw)
        },
        username: (global) => {
            let user = users.find(user => user.id === global.fw || user.id === global.fin)
            return user.username
        }
        
    }
}

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs,
})

server.listen(PORT, () => console.log(PORT))