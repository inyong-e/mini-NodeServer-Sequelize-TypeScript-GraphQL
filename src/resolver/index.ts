import { IResolvers } from "graphql-tools";
import { admin } from "./Admin";

const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`;
    },

    // Admin
    admin
  }
};

export default resolverMAP;
