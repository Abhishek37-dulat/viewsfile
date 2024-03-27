const listOfProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
};

module.exports = {
  listOfProduct,
};
