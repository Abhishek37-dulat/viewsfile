const express = require("express");
const path = require("path");
const { getContact, postContact } = require("../controllers/shopcontroller.js");

const route = express.Router();

route.get("/contactus", getContact);
route.post("/success", postContact);

module.exports = route;
