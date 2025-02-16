// src/components/Flashcard.jsx
import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const Flashcard = ({ flashcard }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card
      component={motion.div}
      layout
      sx={{ minWidth: 275, margin: 2, cursor: "pointer" }}
      onClick={() => setShowAnswer((prev) => !prev)}
    >
      <CardContent>
        <Typography variant="h5">{flashcard.question}</Typography>
        <AnimatePresence>
          {showAnswer && (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="body1">{flashcard.answer}</Typography>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setShowAnswer((prev) => !prev);
          }}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Flashcard;
