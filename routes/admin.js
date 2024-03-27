const express = require("express");
const path = require("path");
const { getProduct, addProduct } = require("../controllers/admincontroller.js");

const route = express.Router();

route.get("/add-product", getProduct);
route.post("/add-product", addProduct);

module.exports = route;
