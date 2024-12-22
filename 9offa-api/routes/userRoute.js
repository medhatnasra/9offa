const express = require("express");
const { GetAllUsers, DeleteUser } = require("../controllers/usersController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/api/users", verifyToken, verifyTokenAndAdmin, GetAllUsers);

router.delete("/api/user/:id", verifyToken, verifyTokenAndAdmin, DeleteUser);

module.exports = router;
