const mongoose = require("mongoose");

// Tạo schema
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { type: String, required: true },
  phone: { type: Number, required: true },
  datetime: { type: String, required: true },
  idea: { type: String },
});

// Tạo model
module.exports = mongoose.model("Customer", customerSchema);
