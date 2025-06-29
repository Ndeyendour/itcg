const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'startup', 'mentor', 'investor', 'user'],
    default: 'user'
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  },
  linkedStartup: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);