const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name } = decoded;
    req.user = { name };
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized " });
  }
};

module.exports = authMiddleware;
