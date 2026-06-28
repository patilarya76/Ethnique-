const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
require("dotenv").config();
const streamifier = require("streamifier");
const multer = require("multer");
const cloudinary = require("./config/cloudinary");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

const app = express();
const connectDB = require("./config/db");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.post(
  "/api/upload/video",
  upload.single("video"),
  async (req, res) => {
    try {

      const streamUpload = () => {
        return new Promise((resolve, reject) => {

          const stream =
            cloudinary.uploader.upload_stream(
              {
                resource_type: "video",
                folder: "ethnique-videos",
              },
              (error, result) => {
                if (result) {
                  resolve(result);
                } else {
                  reject(error);
                }
              }
            );

          streamifier
            .createReadStream(req.file.buffer)
            .pipe(stream);
        });
      };

      const result = await streamUpload();

      res.json({
        success: true,
        videoUrl: result.secure_url,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: "Video upload failed",
      });
    }
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});