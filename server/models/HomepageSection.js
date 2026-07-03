const mongoose = require("mongoose");

const homepageSectionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  videoUrl: String,
  buttonText: String,
  buttonLink: String,
  active: Boolean,
});

module.exports = mongoose.model(
  "HomepageSection",
  homepageSectionSchema
);