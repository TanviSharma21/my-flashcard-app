const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  box: { type: Number, default: 1 },
  nextReview: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
