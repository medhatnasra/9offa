const express = require("express");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const {
  createOrderContoller,
  getAllOrders,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/api/order", verifyToken, createOrderContoller);
router.get("/api/order", verifyTokenAndAdmin, getAllOrders);

module.exports = router;
