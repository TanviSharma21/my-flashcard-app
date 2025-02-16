import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      sx={{
        minHeight: "100vh",
        position: "relative",
        background: `linear-gradient(
          rgba(0, 0, 0, 0.6), 
          rgba(0, 0, 0, 0.6)
        ), url('https://source.unsplash.com/1600x900/?library,books') center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        component={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{
          textAlign: "center",
          maxWidth: 800,
          color: "#fff",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          Master Your Knowledge
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          }}
        >
          Leverage the power of spaced repetition with our cutting-edge
          flashcard system designed for success.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#1976d2",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "background-color 0.3s",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
          onClick={() => navigate("/dashboard")}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
