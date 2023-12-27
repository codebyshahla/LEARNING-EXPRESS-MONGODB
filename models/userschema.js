const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String, 
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    required: true
  }
});

const usrerModel = new mongoose.model("userData", userSchema);
module.exports = usrerModel;
