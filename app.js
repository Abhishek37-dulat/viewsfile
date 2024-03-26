const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const shop = require("./routes/shop.js");
const admin = require("./routes/admin.js");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", admin);
app.use("/", shop);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log("listening to PORT: ", port);
});
