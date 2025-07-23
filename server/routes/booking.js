const express = require("express");
const router = express.Router();
const customerController = require("../controller/CustomerController");

// Đăng ký thông tin
router.post("/", customerController.addCustomer);

module.exports = router;
