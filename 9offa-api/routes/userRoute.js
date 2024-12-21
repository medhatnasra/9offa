const express = require("express");
const { GetAllUsers, DeleteUser } = require("../controllers/usersController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/api/users", verifyTokenAndAdmin, GetAllUsers);

router.delete("/api/user/:id", verifyTokenAndAdmin, DeleteUser);

module.exports = router;
