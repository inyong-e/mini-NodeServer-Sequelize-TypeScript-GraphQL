import { IResolvers } from "graphql-tools";

const resolverMAP: IResolvers = {
  Query: {
    helloworld(_: void, args: void): string {
      return `hello wolrd!`;
    }
  }
};

export default resolverMAP;
