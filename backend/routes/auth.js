const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 🔑 Register Route
router.post("/register", async (req, res) => {
  try {
      console.log("🔹 Register request received:", req.body);

      const { username, email, password } = req.body;

      // ✅ Validate required fields
      if (!username || !email || !password) {
          return res.status(400).json({ error: "Username, email, and password are required" });
      }

      // ✅ Check if email already exists
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
          return res.status(400).json({ error: "Email is already registered. Please use a different email." });
      }

      // ✅ Check if username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ error: "Username already exists. Please choose another one." });
      }

      // ✅ Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // ✅ Create new user
      const newUser = new User({
          username,
          email,
          password: hashedPassword
      });

      await newUser.save();
      console.log("✅ User registered successfully:", newUser);

      res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
      console.error("❌ Registration Error:", error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});


// 🔑 Login Route
router.post("/login", async (req, res) => {
    try {
        console.log("🔹 Login request received:", req.body);

        const { username, password } = req.body;

        // ✅ Validate required fields
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        // ✅ Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // ✅ Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // ✅ Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("✅ Login successful for user:", username);
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

module.exports = router;
