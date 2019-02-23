"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        books(obj, args, context) {
            const { request } = context;
            return getBooks(request);
        },
    },
};
const getBooks = (request) => {
    return Promise.resolve();
};
exports.default = resolvers;
