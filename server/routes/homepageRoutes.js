const express = require("express");
const router = express.Router();

const Homepage = require("../models/Homepage");

router.get("/", async (req, res) => {
  try {
    const section = await Homepage.findOne();

    res.json(section);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const section =
      await Homepage.findOneAndUpdate(
        {},
        req.body,
        {
          upsert: true,
          new: true,
        }
      );

    res.json(section);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;