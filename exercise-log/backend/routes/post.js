const express = require("express");
const router = express.Router(); // Create a router object
const Exercise = require("../models/exercise");
const { authenticate } = require("../middlewares/Authentication");
// Add a new exercise
router.post("/exercises", authenticate, async (req, res) => {
  console.log("hello");
  try {
    // Logic to store the exercise data in the database
    const { name, duration, calories } = req.body;
    const exercise = new Exercise({ name, duration, calories });
    console.log(exercise);
    await exercise.save();
    // Send a success or error response
    res.status(201).json({ message: "Exercise saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save exercise" });
  }
});

// Export the router to use in your main application
module.exports = router;
