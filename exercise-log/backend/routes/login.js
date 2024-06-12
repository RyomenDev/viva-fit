require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router(); // Create a router object

// JWT secret key
const { JWTSECRETKEY } = process.env;
const jwtSecretKey = JWTSECRETKEY;

// Endpoint for user login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Validate input data
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    // Retrieve the user from the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Generate a JWT
      const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: "1h" });

      // Return the token to the client
      res.json({ token });
    } else {
      // Return an error message
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

module.exports = router;
