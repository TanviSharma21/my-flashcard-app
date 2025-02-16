const Flashcard = require('../models/Flashcard');

exports.getFlashcards = async (req, res) => {
    try {
        const flashcards = await Flashcard.find({});
        res.json(flashcards);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.addFlashcard = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newFlashcard = new Flashcard({ question, answer });
        await newFlashcard.save();
        res.json(newFlashcard);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.updateFlashcard = async (req, res) => {
    try {
        const { id } = req.params;
        const { correct } = req.body;
        const flashcard = await Flashcard.findById(id);

        if (!flashcard) return res.status(404).json({ error: 'Flashcard not found' });

        flashcard.box = correct ? Math.min(flashcard.box + 1, 5) : 1;
        flashcard.nextReview = new Date(Date.now() + flashcard.box * 24 * 60 * 60 * 1000);
        
        await flashcard.save();
        res.json(flashcard);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.deleteFlashcard = async (req, res) => {
    try {
        await Flashcard.findByIdAndDelete(req.params.id);
        res.json({ message: 'Flashcard Deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
