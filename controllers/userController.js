const express = require("express");
const app = express();
const bodyParser = require("body-parser");




const home = (req, res) => {
  if(req.session.user && req.session.isAdmin === false) {
    res.render("user/ushome");
  }
  else{
    res.redirect("/login")
  }
}





module.exports = {
  home
};
