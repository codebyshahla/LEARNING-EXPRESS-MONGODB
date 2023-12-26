const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const usrermodel = new mongoose.model("userData", userschema);
module.exports = usrermodel;
