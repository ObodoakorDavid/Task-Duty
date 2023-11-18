/** @format */

const methodNotAllowed = (req, res) => {
  res.json({ message: "Method is not allowed" });
};

module.exports = methodNotAllowed