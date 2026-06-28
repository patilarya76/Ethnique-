const express = require("express");
const router = express.Router();

const adminAuth = require("../middleware/adminAuth");

// Admin-only route
router.get("/dashboard", adminAuth, async (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
    admin: req.admin,
  });
});

module.exports = router;