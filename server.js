const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const resolvers = require("./resolvers");
const jwt = require('jsonwebtoken');

const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");

require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err));

const getUser = async (token) => {
    if (token) {
        try {
            return  await jwt.verify(token, process.env.SECRET)
        } catch (err) {
            throw new AuthenticationError('Your session has ended. Please sign in again')
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        return error;
    },
    context: async ({ req }) => {
        const token = req.headers["authorization"];
        return {
            User,
            Post,
            currentUser: await getUser(token)
        };
    }
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});
