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
const photoUpload = require("../middlewares/uploadPhotos");

const router = express.Router();

router.post(
  "/api/product/",
  verifyToken,
  verifyBothVandA,
  photoUpload.single("image"),

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
