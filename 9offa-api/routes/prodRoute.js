const express = require("express");

const {
  createProdController,
  getAllProducts,
  deleteProdController,
  getProductVendor,
} = require("../controllers/prodController");
const {
  verifyToken,
  verifyTokenAndVendor,
  verifyTokenAndAdmin,
  verifyBothVandA,
} = require("../middlewares/verifyToken");

const router = express.Router();

router.post(
  "/api/product/",
  verifyToken,
  verifyBothVandA,
  createProdController
);
router.get("/api/product/", verifyToken, getAllProducts);
router.delete(
  "/api/product/:id",
  verifyToken,
  verifyBothVandA,
  deleteProdController
);
router.get(
  "/api/product/:id",
  verifyToken,
  verifyTokenAndAdmin,
  getProductVendor
);

module.exports = router;
