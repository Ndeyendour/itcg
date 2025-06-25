const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  expertise: [String],
  location: String,
  photoUrl: String,
  associatedStartups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Startup' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mentor", MentorSchema);
