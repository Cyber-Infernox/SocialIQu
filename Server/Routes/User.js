const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.send("Welcome To SocialIQu");
});

module.exports = Router;
