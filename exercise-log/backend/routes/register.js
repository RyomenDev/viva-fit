const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const express = require("express");
const router = express.Router(); // Create a router object
const User = require("../models/user"); // Import your User model

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Validate input data
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

   try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username: username,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    // Return a success message
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Failed to register user" });
  }

});

module.exports = router;
