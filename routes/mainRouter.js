const express = require("express");
const Router = express.Router();
const {
  signup,
  login,
  postsignup,
} = require("../controllers/maincontroller");

Router.get("/login", login);
Router.get("/signup",signup)
Router.post("/signup",postsignup)



module.exports = Router;
