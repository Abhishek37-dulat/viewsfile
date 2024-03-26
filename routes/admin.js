const express = require("express");
const path = require("path");

const route = express.Router();

route.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
route.post("/add-product", (req, res) => {
  res.redirect("/");
});

module.exports = route;
