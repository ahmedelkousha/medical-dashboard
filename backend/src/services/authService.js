import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async ({ name,email,password,role }) => {
  if (await User.findOne({ email })) throw new Error("Email already used");
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  return { id: user._id, name: user.name, email: user.email, role: user.role, token: generateToken(user._id) };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");
  return { id: user._id, name: user.name, email: user.email, role: user.role, token: generateToken(user._id) };
};
