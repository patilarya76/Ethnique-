const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ msg: "JWT secret missing" });
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
  token,
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    return res.status(500).json({ msg: err.message || "Server error" });
  }
});

// LOGIN
// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Email received:", email);
console.log("Password received:", password);

console.log("ENV ADMIN EMAIL:", process.env.ADMIN_EMAIL);
console.log("ENV ADMIN PASSWORD:", process.env.ADMIN_PASSWORD);

    // ==========================
    // ADMIN LOGIN
    // ==========================
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        {
          role: "admin",
          email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      return res.json({
        success: true,
        token,
        user: {
          name: "Dhruv Jain",
          email,
          role: "admin",
        },
      });
    }

    // ==========================
    // USER LOGIN
    // ==========================

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: "user",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: "user",
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
module.exports = router;