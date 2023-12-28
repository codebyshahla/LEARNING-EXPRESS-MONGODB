const express = require("express");
const Router = express.Router();
const mongoose = require('mongoose');

const {
  home
} = require("../controllers/userController");


Router.get("/userhome", (req, res)=>{
  res.render('user/ushome')
});

Router.get('/userproductlist',(req, res)=>{
  res.render('user/userproductlist')
})
Router.get('/userupdate',(req, res)=>{
res.render('user/userupdate')
})



module.exports = Router;


