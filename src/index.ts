import { IResolvers } from "graphql-tools";

const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`;
    }
  }
};

export default resolverMAP;
