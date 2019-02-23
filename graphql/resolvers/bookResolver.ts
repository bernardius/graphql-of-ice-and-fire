import { Request } from 'express';

const resolvers = {
    Query: {
        books(obj, args, context) {
            const { request } = context;

            return getBooks(request);
        },
    },
};

const getBooks = (request: Request): Promise<any> => {

    return Promise.resolve();
};

export default resolvers;