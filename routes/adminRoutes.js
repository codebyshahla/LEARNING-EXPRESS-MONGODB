const express = require("express");
const Router = express.Router();
const admincontroller = require("../controllers/adminController");
const multer = require("../middleware/multorconfig");
const uploads = require("../middleware/multorconfig");

Router.get("/adminhome", admincontroller.home);

Router.get("/admin/product-form", (req, res) => {
  res.render("admin/productform");
});
Router.get("/admin/productlist", admincontroller.render);

Router.get("/admin/userslistform", (req, res) => {
  res.render("admin/userslistform");

});
Router.post(
  "/submit_product",
  multer.single("productImage"),
  admincontroller.addproduct
);
Router.get("/admin/deleteproduct/:productId", admincontroller.getproductdelete);
// Router.get("/admin/editproduct/:productId", admincontroller.getproductedit);
Router.get("/admin/editPro/:productId",admincontroller.getproductedit)
Router.post(
  "/editProduct/:productId",
  uploads.single("productImage"),
  admincontroller.postproductedit
);

module.exports = Router;
