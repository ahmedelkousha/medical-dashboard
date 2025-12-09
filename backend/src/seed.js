import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected");

    await User.deleteMany(); // Clear all users

    const password = await bcrypt.hash("123456", 10);

    const users = [
      {
        name: "Admin User",
        email: "admin@med.com",
        password,
        role: "admin",
      },
      {
        name: "Dr. John Smith",
        email: "doctor@med.com",
        password,
        role: "doctor",
      },
      {
        name: "Patient One",
        email: "patient@med.com",
        password,
        role: "patient",
      },
    ];

    await User.insertMany(users);

    console.log("Seed created successfully");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

seed();
