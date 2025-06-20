import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
  await connectToDatabase();

  try {
    const hashPassword = await bcrypt.hash("adminpassword", 10);

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin"
    });

    await newUser.save();
    console.log("✅ Admin user created successfully.");
  } catch (error) {
    console.error("❌ Error seeding admin user:", error);
  }
};

userRegister();
