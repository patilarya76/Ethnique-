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
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    return res.status(500).json({ msg: err.message || "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN BODY:", req.body);

    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ msg: "JWT secret missing" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    if (!user.password) {
      return res.status(500).json({ msg: "User password missing in database" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ msg: err.message || "Server error" });
  }
});

module.exports = router;