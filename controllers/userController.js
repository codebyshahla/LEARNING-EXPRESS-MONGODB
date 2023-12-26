const express = require("express");
const app = express();
const bodyParser = require("body-parser");




const home = (req, res) => {
  res.render('user/ushome')
}





module.exports = {
  home
};
