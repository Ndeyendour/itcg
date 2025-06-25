const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['Accelerator', 'Incubator', 'Corporate', 'GovernmentBody'],
    required: true
  },
  sectors: [String],
  location: String,
  associatedStartups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Startup' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Organization", OrganizationSchema);
