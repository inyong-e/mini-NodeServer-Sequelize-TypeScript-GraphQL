import { test } from "../controller/admin";

const admin = async (_: void, args: void) => {
  return await test();
};

export { admin };
