const express = require("express");
const Router = express.Router();
const {
  signup,
  login,
  postsignup,
  postlogin
} = require("../controllers/maincontroller");

Router.get("/login", login);
Router.get("/signup",signup)
Router.post("/signup",postsignup)
Router.post("/login",postlogin)



module.exports = Router;
