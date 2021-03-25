require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (_, res) => {
  res.status(201).send("Hello World");
});

server.applyMiddleware({ app });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`🪐 Database connected`);
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(
        `🚀 GraphQl running at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  })
  .catch(console.log);
