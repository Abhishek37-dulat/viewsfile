const express = require("express");
const path = require("path");
const { listOfProduct } = require("../controllers/productcontroller.js");

const route = express.Router();

route.get("/", listOfProduct);

module.exports = route;
