"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const graphql_import_1 = require("graphql-import");
const axios_1 = require("axios");
const resolvers = {
    Query: {
        book: () => {
            return 'stuff';
        },
        books: () => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get('https://www.anapioficeandfire.com/api/books');
            return data;
        }),
    },
};
const typeDefs = graphql_import_1.importSchema('schema.graphql');
const schema = apollo_server_express_1.makeExecutableSchema({
    resolvers,
    typeDefs,
});
exports.default = schema;
