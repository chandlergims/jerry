const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
    enum: ['Glasses', 'Teeth', 'Shoes', 'Backpack']
  },
  count: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vote', VoteSchema);
