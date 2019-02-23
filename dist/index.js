"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const shema_1 = require("./graphql/shema");
const app = express();
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: shema_1.default,
});
apolloServer.applyMiddleware({ app });
app.listen(8080, () => {
    console.log(`Apollo server ready at http on port ${8080}`);
});
