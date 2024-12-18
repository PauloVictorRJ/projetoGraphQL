import { ApolloServer } from "apollo-server"
import typeDefs from "./src/schema.js"
import Query from "./src/resolvers/query.js"
import Mutation from "./src/resolvers/mutation.js"
import { markers } from "./src/database.js"

const resolvers = { Query, Mutation }
const context = { markers }

const server = new ApolloServer({ typeDefs, resolvers, context })

server
    .listen()
    .then((serverInfo) => {
        console.log(`Serviço em execução: ${serverInfo.url}`)
    })