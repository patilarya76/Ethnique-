const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {
    try {
      res.json(req.user);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

module.exports = router;