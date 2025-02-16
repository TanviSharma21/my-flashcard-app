// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import FlashcardList from "../components/FlashcardList.jsx";

function Dashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5001/api/flashcards",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFlashcards(response.data);
      } catch (err) {
        console.error("Error fetching flashcards:", err);
        setError("Failed to load flashcards. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Your Flashcards
      </Typography>
      {loading ? (
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <CircularProgress />
        </Grid>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : flashcards.length === 0 ? (
        <Typography variant="h6">
          No flashcards found. Please add some!
        </Typography>
      ) : (
        <FlashcardList flashcards={flashcards} />
      )}
    </Container>
  );
}

export default Dashboard;
