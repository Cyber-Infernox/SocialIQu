const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Auth");

// Express app
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

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
