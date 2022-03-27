require('dotenv').config({ path: './.env' })
const { ApolloServer } = require('apollo-server')
const db = require('./lib/datasources/db.js')
const typeDefs = require('./lib/schema')
const resolvers = require('./lib/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
