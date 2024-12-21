const express = require("express");

const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const createCategoryController = require("../controllers/catController");

const router = express.Router();

router.post("/api/category/", verifyTokenAndAdmin, createCategoryController);

module.exports = router;
