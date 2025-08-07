import bcrypt from "bcrypt";
import User from "../models/userModel.js";
export async function createUser({ username, password }) {
  const encryptPassword = await bcrypt.hash(password, 10);
  await User.create({
    username,
    password: encryptPassword,
  });
}

export async function hasUsername(username) {
  const user = await User.findOne({ where: { username } });
  return user !== null;
}

export async function verifyUser(username, password) {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return false;
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  return isPasswordValid;
}
