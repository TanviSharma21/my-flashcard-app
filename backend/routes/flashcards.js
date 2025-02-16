const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  const { question, answer } = req.body;
  const flashcard = new Flashcard({ question, answer, userId: req.user.id });
  await flashcard.save();
  res.json(flashcard);
});

router.get('/', authMiddleware, async (req, res) => {
  const flashcards = await Flashcard.find({ userId: req.user.id, nextReview: { $lte: new Date() } });
  res.json(flashcards);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const { correct } = req.body;
  const flashcard = await Flashcard.findById(req.params.id);
  if (!flashcard || flashcard.userId.toString() !== req.user.id) return res.status(403).json({ error: "Unauthorized" });

  flashcard.box = correct ? flashcard.box + 1 : 1;
  flashcard.nextReview = new Date(Date.now() + flashcard.box * 24 * 60 * 60 * 1000);
  await flashcard.save();
  res.json(flashcard);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
