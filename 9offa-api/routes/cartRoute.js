const express = require("express");
const {
  createCartController,
  getCartController,
  deleteCartController,
} = require("../controllers/cartController");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/api/cart", verifyToken, getCartController);

router.post("/api/cart", verifyToken, createCartController);

router.delete("/api/cart/:ItemId", verifyToken, deleteCartController);

module.exports = router;
