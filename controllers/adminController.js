const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userdatas = require("../models/userschema");
const Product = require("../models/productschema");

const render=async(req,res)=>{
  const product= await Product.find()
  res.render("admin/productlist",{allproducts:product})
}

const home = (req, res) => {
  res.render("admin/adhome");
};
const addproduct = async (req, res) => {
  if (req.session.user && req.session.isAdmin) {
    // Process the uploaded image and save the product with image URL
    const imageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : "/default-image.jpg";
    console.log(req.body.ProductName);

    const newProduct = new Product({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productQuantity: req.body.productQuantity,
      imageUrl: imageUrl,
    });

    try {
      const savedProduct = await newProduct.save();
      res.redirect("/admin/productlist"); // Redirect to the product list after successful creation
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  home,
  addproduct,
  render,
};


