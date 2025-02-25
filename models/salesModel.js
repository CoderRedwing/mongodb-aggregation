const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  item: String,
  category: String,
  price: Number,
  quantity: Number,
  tags: [String],
  date: Date
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
