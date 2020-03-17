import { importSchema } from "graphql-import";

import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";

import resolvers from "./resolver";

const typeDefs = importSchema(__dirname + "/schema/schema.graphql");

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers
});

export default schema;
