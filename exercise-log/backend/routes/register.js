const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router(); // Create a router object
const User = require("../models/user"); // Import your User model
const { dbConnect } = require("../config/Database");
const validator = require("validator");

router.post("/register", async (req, res) => {
  console.log("in backend register");
  const { username, password, userEmail } = req.body;
  console.log(username, password, userEmail);
  // Validate input data
  if (!username || !password || !userEmail) {
    return res
      .status(400)
      .json({ error: "Username ,userEmail and password are required" });
  }

  // Validate the name field
  if (!validator.isLength(username, { min: 2, max: 50 })) {
    return res
      .status(400)
      .json({ error: "Name must be between 2 and 50 characters" });
  }

  // Validate the email field
  if (!validator.isEmail(userEmail)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Validate the password field
  if (!validator.isLength(password, { min: 6 })) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

  //   const existingUser = await database
  //     .collection("users")
  //     .findOne({ userEmail });
  //   if (existingUser) {
  //     return res
  //       .status(409)
  //       .json({ error: "User with this email already exists" });
  //   }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username: username,
      password: hashedPassword,
      userEmail: userEmail,
    });
    // console.log(newUser);

    // Save the user to the database
    // await newUser.save();
    const db = await dbConnect(); // Connect to MongoDB

    const existingUser = await db.collection("users").findOne({ userEmail });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    const result = await db.collection("users").insertOne(newUser);

    // Return a success message
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
});

module.exports = router;
