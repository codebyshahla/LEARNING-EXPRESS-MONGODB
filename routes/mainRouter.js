const express = require("express");
const Router = express.Router();
const {
  signup,

  login,
} = require("../controllers/maincontroller");

Router.get("/login", login);
Router.get("/signup",signup)



module.exports = Router;
