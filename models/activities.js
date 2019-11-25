const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: {
    ref: 'memberSchema',
    type: String
  },
  username: {
    type: String
  },
  description: {
    required: true,
    type: String
  },
  duration: {
    required: true,
    type: Number
  },
  date: {
    required: false,
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema);