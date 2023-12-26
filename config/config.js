const { default: mongoose } = require("mongoose");

function config() {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/lvx"
    )
    .then(() => {
      console.log("connected");
    });
}

module.exports = config;