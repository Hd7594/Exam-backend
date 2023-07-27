const express = require("express");
const router = express.Router();

const modelBrand = require("../models/Brand");
const phoneBrand = require("../models/Phone");

router.post("/brand", async (req, res) => {
  console.log("Brand route called");
  try {
    //console.log("test");

    const name = req.body.name;
    const headquarter = req.body.headquarter;
    const country = req.body.country;

    const addBrand = await modelBrand.create({
      name: name,
      headquarter: headquarter,
      country: country,
    });

    res.json(addBrand);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/phone", async (req, res) => {
  try {
    const model = req.body.model;
    const screenSize = req.body.screenSize;
    const color = req.body.color;
    const brandId = req.body.brandId;

    const id = req.body.id;

    const newPhone = await phoneBrand.create({
      model: model,
      screenSize: screenSize,
      color: color,
      brandRef: brandId,
    });
    res.json({
      model: newPhone.model,
      screenSize: newPhone.screenSize,
      color: newPhone.color,
      brandId: id,
      brandRef: {
        brandId: "",
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/phone", async (req, res) => {
  try {
    const listPhones = await phoneBrand.find().populate("brandRef");
    res.json(listPhones);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
