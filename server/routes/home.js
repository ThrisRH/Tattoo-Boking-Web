const express = require("express");
const router = express.Router();

const homeController = require("../controller/home");

const products = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];
router.get("/products", homeController.getProducts);

module.exports = router;
