const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userdatas = require("../models/userschema");
const Product = require("../models/productschema");

const render = async (req, res) => {
  const product = await Product.find();
  res.render("admin/productlist", { allproducts: product });
};

const home = (req, res) => {
  if (req.session.user && req.session.isAdmin) res.render("admin/adhome");
  else res.redirect("/login");
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

const getproductdelete = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);
  console.log(product);
  if (product) {
    await Product.findByIdAndDelete({ _id: productId });
    res.redirect("/admin/productlist");
  }
};
const getproductedit = async (req, res) => {
  if (req.session.user && req.session.isAdmin) {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.render("admin/producteditform", { item: product });
  } else {
    res.redirect("/login");
  }
};

const postproductedit = async (req, res) => {

  const productId = req.params.productId;
  const { productName, productDescription, productPrice, productQuantity } =
    req.body;
  const product = await Product.findById(productId);
  if (product) {
    product.productName = productName;
    product.productDescription = productDescription;
    product.productPrice = productPrice;
    product.productQuantity = productQuantity;
    if (req.file) {
      product.imagePath = req.file ? "product-images/" + req.file.filename : "";
    }
    await product.save();
    console.log(Product);
    res.redirect("/admin/productlist");
  }
};

module.exports = {
  home,
  addproduct,
  render,
  getproductdelete,
  getproductedit,
  postproductedit,
};
