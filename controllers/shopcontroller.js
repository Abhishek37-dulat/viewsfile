const getContact = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};
const postContact = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
};

module.exports = {
  getContact,
  postContact,
};
