const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userdatas = require("../models/userschema");

const home = (req, res) => {
  res.render("admin/adhome");
};

module.exports = {
  home, 
  
}
