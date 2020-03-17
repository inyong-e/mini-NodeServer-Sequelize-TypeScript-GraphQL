import { Admin } from "../models/admin.model";
const test = async () => {
  const admins = await Admin.findAll();
  return admins;
};

export { test };
