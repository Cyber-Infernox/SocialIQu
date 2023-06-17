const Post = require("../Models/Post");
const User = require("../Models/User");

const Router = require("express").Router();

// Create post
Router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
  }
});

// Update post
Router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      const updatedPost = await post.updateOne({ $set: req.body });
      res.status(200).json(updatedPost);
    } else {
      res.status(400).json("You can only update your post");
    }
  } catch (err) {
    console.log(err);
  }
});

// Delete post
Router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await Post.findByIdAndDelete(req.params.id);
      //   await post.deleteOne();
      res.status(200).json("Post deleted");
    } else {
      res.status(400).json("You can only delete your post");
    }
  } catch (err) {
    console.log(err);
  }
});

// Like and dislike post
Router.put("/:id/likes", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId !== req.body.userId) {
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json(post);
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json(post);
      }
    } else {
      res.status(400).json("You cannot like or dislike your own post");
    }
  } catch (err) {
    console.log(err);
  }
});

// Get post
Router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

// Get timeline posts
Router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    console.log(err);
  }
});

module.exports = Router;
