const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: String,
  stage: { type: String, enum: ['Ideation', 'Validation', 'Scaling', 'Growth'] },
  city: String,
  state: String,
  industry: String,
  sector: String,
  tags: [String],
  itcgRecognized: { type: Boolean, default: false },
  is80IACExempted: { type: Boolean, default: false },
  internationalUser: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Startup", StartupSchema);
