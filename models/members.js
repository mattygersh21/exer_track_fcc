const mongoose = require('mongoose');
const customId = require('custom-id');

const memberSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String
  },
  _id: {
    default: customId({}),
    type: String
  }
});

module.exports = mongoose.model('Member', memberSchema);