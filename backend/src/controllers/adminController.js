import User from "../models/User.js";
import bcrypt from "bcryptjs";

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE user
export const updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true }
    ).select("-password");

    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Updated successfully", user: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    const removed = await User.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
