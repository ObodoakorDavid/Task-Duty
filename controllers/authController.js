/** @format */

const registerUser = (req, res) => {
  res.json({ message: req.body.username });
};

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

const getUser = (req, res) => {
  res.json({ message: "View User" });
};

module.exports = { registerUser, loginUser, getUser };
