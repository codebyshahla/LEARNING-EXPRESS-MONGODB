const express = require("express");
const Router = express.Router();
const admincontroller=require("../controllers/adminController")

Router.get("/adminhome",admincontroller.home);

Router.get('/admin/product-form',(req, res)=>{
  
    res.render('admin/productform')
})
Router.get('/admin/productlist',(req, res)=>{

  res.render('admin/productlist')
})
Router.get('/admin/producteditform',(req, res)=>{
  res.render('admin/producteditform')
})
Router.get('/admin/userslistform',(req, res)=>{
  res.render('admin/userslistform')
})


module.exports = Router;
