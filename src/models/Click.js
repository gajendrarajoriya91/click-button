const mongoose = require("mongoose");

const ClickSchema = new mongoose.Schema({
  button: String,
  timestamp: { type: Date, default: Date.now },
  userIp: String,
});

module.exports = mongoose.model("Click", ClickSchema);
