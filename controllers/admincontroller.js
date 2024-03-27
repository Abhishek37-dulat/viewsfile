const getProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
};
const addProduct = (req, res) => {
  res.redirect("/");
};

module.exports = {
  getProduct,
  addProduct,
};
