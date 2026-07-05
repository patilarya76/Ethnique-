const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(
      "MONGO_URI exists:",
      !!process.env.MONGO_URI
    );

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error(
      "MongoDB connection failed:"
    );
    console.error(err);
  }
};

module.exports = connectDB;