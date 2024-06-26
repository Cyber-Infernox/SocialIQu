const Router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../Models/User");

// Register
Router.post("/register", async (req, res) => {
  try {
    // Generate new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save new user
    const user = await newUser.save();

    // Response
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login
Router.post("/login", async (req, res) => {
  try {
    // Find user
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("Email not yet registered...Signup instead");
    }

    // Validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json("Wrong password");
    }

    // Response
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
