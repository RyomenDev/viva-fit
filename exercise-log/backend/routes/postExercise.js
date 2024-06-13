const express = require("express");
const router = express.Router(); // Create a router object
const Exercise = require("../models/exercise");
const { authenticate } = require("../middlewares/Authentication");
const { dbConnect } = require("../config/Database");
const validator = require("validator");

// Add a new exercise
router.post("/exercises", authenticate, async (req, res) => {
  console.log("hello");
  try {
    // Logic to store the exercise data in the database
    const { name, duration, calories } = req.body;
    const userId = req.userId;

    // Validate the name field
    if (!validator.isLength(name, { min: 2, max: 50 })) {
      return res
        .status(400)
        .json({ error: "Exercise name must be between 2 and 50 characters" });
    }

    // Validate duration as integer
    if (!validator.isInt(String(duration))) {
      return res.status(400).json({ error: "Invalid duration value" });
    }

    // Validate calories as integer
    if (!validator.isInt(String(calories))) {
      return res.status(400).json({ error: "Invalid calories value" });
    }
    const exercise = new Exercise({ userId, name, duration, calories });
    // console.log(exercise);
    // await exercise.save();
    const db = await dbConnect(); // Connect to MongoDB
    const result = await db.collection("exercises").insertOne(exercise);
    // Send a success or error response
    res.status(201).json({ message: "Exercise saved successfully", exercise });
  } catch (error) {
    console.error(error);
    console.error("Failed to save exercise");
    res.status(500).json({ error: "Failed to save exercise" });
  }
});

// Export the router to use in your main application
module.exports = router;
