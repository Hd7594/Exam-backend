const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/phone-api");

const phoneBrandRoutes = require("./routes/phoneRoutes");

app.use(express.json());
app.use(phoneBrandRoutes);

app.listen(3000, (req, res) => {
  console.log("server started");
});
