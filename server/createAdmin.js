require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Admin = require("./models/Admin");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne({
      email: "dhruvjain"
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Aeroplane",
      10
    );

    await Admin.create({
      name: "Dhruv Jain",
      email: "theethnique26@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

createAdmin();