const express = require("express");
const Router = express.Router();

Router.get("/", (req, res)=>{
    res.render('admin/adhome')
});

Router.get('/product-form',(req, res)=>{
    res.render('admin/productform')
})
Router.get('/productlist',(req, res)=>{
  res.render('admin/productlist')
})
Router.get('/producteditform',(req, res)=>{
  res.render('admin/producteditform')
})
Router.get('/userslistform',(req, res)=>{
  res.render('admin/userslistform')
})


module.exports = Router;
