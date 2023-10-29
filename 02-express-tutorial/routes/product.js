const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductPrice,
  getProductById,
} = require("../controllers/product");

router.get("/", getProducts);

router.get("/price", getProductPrice);

router.get("/:productID", getProductById);

module.exports = router;
