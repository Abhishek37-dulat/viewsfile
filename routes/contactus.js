const express = require("express");
const path = require("path");

const route = express.Router();

route.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
});
route.post("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
});

module.exports = route;
