const Router = require("express").Router();
const User = require("../Models/User");

const bcrypt = require("bcrypt");

// Update User
Router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(400).json("You can update only your account");
  }
});

// Delete User
Router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(400).json("You can delete only your account");
  }
});

// Get User
Router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  // if (req.body.userId === req.params.id || req.body.isAdmin) {
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, _id, createdAt, __v, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    console.log(err);
  }
  // } else {
  //   return res.status(400).json("You can only open your account");
  // }
});

// Follow User
Router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json(user);
      } else {
        res.status(200).json("Already Following");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(400).json("You cannot follow yourself");
  }
});

// Unfollow User
Router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json(user);
      } else {
        res.status(200).json("Already not following");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(400).json("You cannot unfollow yourself");
  }
});

module.exports = Router;
