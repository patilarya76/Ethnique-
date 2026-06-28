const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    console.log("TOKEN RECEIVED:", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decoded);

    const admin = await Admin.findById(decoded.id);

    console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found",
      });
    }

    req.admin = admin;
    next();

  } catch (error) {
    console.log("AUTH ERROR:", error);

    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = adminAuth;