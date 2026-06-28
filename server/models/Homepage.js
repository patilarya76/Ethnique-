const mongoose = require("mongoose");

const homepageSchema =
  new mongoose.Schema({
    title: String,
    subtitle: String,
    videoUrl: String,
    buttonText: String,
    buttonLink: String,
  });

module.exports = mongoose.model(
  "Homepage",
  homepageSchema
);