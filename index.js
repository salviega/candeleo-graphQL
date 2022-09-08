require('dotenv').config({ path: './.env' })
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./lib/schema')
const resolvers = require('./lib/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })
server.listen({ port: process.env.PORT || 4000 }).then(({ url, port }) => {
  console.log(
    `Server is running
    Listening on port ${port}
    Query at ${url}`)
})
