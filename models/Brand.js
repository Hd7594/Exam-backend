const mongoose = require("mongoose");

const Brand = mongoose.model("Brand", {
  name: String,
  headquarter: String,
  country: String,
});

//console.log("Phone model initialized.");

module.exports = Brand;
