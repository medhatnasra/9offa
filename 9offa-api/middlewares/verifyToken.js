const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authCookie = req.cookies["authcookie"];

  if (!authCookie) {
    return res.status(400).json({ message: "No Token Provided" });
  }
  try {
    var decoded = await jwt.verify(authCookie, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Authentication required" });
  }
};
const verifyTokenAndAdmin = async (req, res, next) => {
  try {
    if (req.user.user.role == "admin") {
      next();
    } else {
      res.status(401).json({ message: "You Can't Access.." });
    }
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
const verifyBothVandA = async (req, res, next) => {
  try {
    if (req.user.user.role == "admin" || req.user.user.role == "vendor") {
      next();
    } else {
      res.status(401).json({ message: "You Can't Access.." });
    }
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const verifyTokenAndVendor = async (req, res, next) => {
  try {
    if (req.user.user.role == "vendor" && req.user.user.id == req.params.id) {
      next();
    } else {
      res.status(401).json({ message: "You Can't Access.." });
    }
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndVendor,
  verifyBothVandA,
};
