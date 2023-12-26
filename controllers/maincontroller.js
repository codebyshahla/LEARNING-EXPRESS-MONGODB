const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const signup = (req, res) => {
  res.render("signup");
};

const login = (req, res) => {
  res.render("login");
};

module.exports = {
  signup,
  login,
};
