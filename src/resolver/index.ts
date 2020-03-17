import { IResolvers } from "graphql-tools";
import { admins } from "./Admin";

const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`;
    },

    // Admin
    admins
  }
};

export default resolverMAP;
