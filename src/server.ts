import express from "express";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import { createConnection } from "typeorm";

import schema from "./schema";

createConnection()
  .then(() => {
    console.log("Database connected!");
  })
  .catch(error => console.log(error));

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});

app.use("*", cors());
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen({ port: 8000 }, (): void => console.log("server start"));
