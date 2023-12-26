const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userdatas = require("../models/userschema");

const home = (req, res) => {
  res.render("admin/adhome");
};

postsignup: async (req, res) => {
  const { fullname, email, password, Repassword } = req.body;
  console.log("heelloow");
  const newUser = {
    fullname,
    email,
    password,
  };
  const existUser = await userdatas.findOne({ email: newUser.email });
  if (existUser) {
    msg.errs = "Username already exists. Choose another username.";
    res.redirect("/signup");
  } else {
    if (password === confirmpass) {
      const userdata = await userdatas.insertMany(newUser);
      req.session.password = password;

      const alluser = await userdatas.find();
      console.log(alluser);
      res.redirect("/user");
    } else {
      msg.errs = "Confirm password does not match";
      res.redirect("/signup");
    }
  }
},
  (module.exports = {
    home,
  });
