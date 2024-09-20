const Customer = require("../model/Customer");

const CustomerController = {
  // Đăng ký thông tin khách hàng]
  addCustomer: async (req, res) => {
    console.log("Received data:", req.body); // Thêm log này
    try {
      let customer = new Customer(req.body);
      let result = await customer.save();
      res.status(201).send(result); // Đổi mã trạng thái thành 201
    } catch (error) {
      console.error("Error saving customer:", error); // Thêm log lỗi
      res.status(500).json(error);
    }
  },
};

module.exports = CustomerController;
