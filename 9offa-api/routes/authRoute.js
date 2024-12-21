const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = express.Router();

router.post("/api/register", registerController);
router.post("/api/login", loginController);

module.exports = router;
