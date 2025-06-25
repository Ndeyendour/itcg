const mongoose = require("mongoose");

const InvestorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['Angel', 'VC', 'Corporate'],
    required: true
  },
  sectorsInterestedIn: [String],
  location: String,
  investedStartups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Startup' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Investor", InvestorSchema);
