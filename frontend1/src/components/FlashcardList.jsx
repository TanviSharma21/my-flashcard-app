// src/components/FlashcardList.jsx
import React from "react";
import { Grid } from "@mui/material";
import Flashcard from "./Flashcard.jsx";

function FlashcardList({ flashcards }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {flashcards.map((flashcard) => (
        <Grid item key={flashcard._id} xs={12} sm={6} md={4}>
          <Flashcard flashcard={flashcard} />
        </Grid>
      ))}
    </Grid>
  );
}

export default FlashcardList;
