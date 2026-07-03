const express = require("express");
const router = express.Router();

const HomepageSection = require("../models/HomepageSection");

router.get("/", async (req, res) => {
  try {
    const section =
      await HomepageSection.findOne({
        active: true,
      });

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
      await HomepageSection.findOneAndUpdate(
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