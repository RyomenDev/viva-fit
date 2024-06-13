require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const User = require("../models/user");
const router = express.Router(); // Create a router object
const { dbConnect } = require("../config/Database");
const { authenticate } = require("../middlewares/Authentication");
const validator = require("validator");

// JWT secret key
const { JWTSECRETKEY } = process.env;
const jwtSecretKey = JWTSECRETKEY;

// Endpoint for user login
router.post("/login", async (req, res) => {
  //   const { username, password, userEmail } = req.body;
  const { password, userEmail } = req.body;

  // Validate input data
  //   if (!username || !password) {
  if (!password || !userEmail) {
    return res
      .status(400)
      .json({ error: "UserEmail and password are required" });
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

  try {
    // Retrieve the user from the database
    const db = await dbConnect();
    const user = await db.collection("users").findOne({ userEmail });
    // const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Generate a JWT
      //   const token = jwt.sign({ userEmail }, jwtSecretKey, { expiresIn: "1h" });
      const token = jwt.sign(
        { userId: user._id, userEmail: user.userEmail },
        JWTSECRETKEY,
        { expiresIn: "1h" }
      );

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
