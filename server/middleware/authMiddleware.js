const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.header("Authorization");

    console.log(
      "AUTH HEADER:",
      authHeader
    );

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.startsWith(
      "Bearer "
    )
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("TOKEN:", token);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log(
      "DECODED:",
      decoded
    );

    const user =
      await User.findById(
        decoded.id
      ).select("-password");

    console.log(
      "USER FOUND:",
      user
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(
      "AUTH ERROR:",
      err.message
    );

    return res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = authMiddleware;