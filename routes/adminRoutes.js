const express = require("express");
const Router = express.Router();
const admincontroller = require("../controllers/adminController");
const multer = require("../middleware/multorconfig");

Router.get("/adminhome", admincontroller.home);

Router.get("/admin/product-form", (req, res) => {
  res.render("admin/productform");
});
Router.get("/admin/productlist", admincontroller.render);
Router.get("/admin/producteditform", (req, res) => {
  res.render("admin/producteditform");
});
Router.get("/admin/userslistform", (req, res) => {
  res.render("admin/userslistform");
});
Router.post(
  "/submit_product",
  multer.single("productImage"),
  admincontroller.addproduct
);

module.exports = Router;



