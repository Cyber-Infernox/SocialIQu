const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

dotenv.config();

const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Auth");
const postRoutes = require("./Routes/Post");

// Express app
const express = require("express");
const app = express();

// File Management Middleware
app.use("/images", express.static(path.join(__dirname, "Assets/Images")));

// Middlewares
app.use(express.json()); // BodyParser for POST requests
app.use(helmet());
app.use(morgan("common"));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// File Management
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Assets/Images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
    // file.originalname (For Postman)
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully!");
  } catch (error) {
    console.log(error);
  }
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
      console.log("Connected to database");
    });
  })
  .catch((error) => {
    console.log(error);
  });
