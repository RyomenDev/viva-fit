const express = require("express");
const router = express.Router(); // Create a router object
const Exercise = require("../models/exercise");
const { authenticate } = require("../middlewares/Authentication");
const { dbConnect } = require("../config/Database");
const validator = require("validator");

// Add a new exercise
// router.post("/exercises", authenticate, async (req, res) => {
router.post("/exercises", async (req, res) => {
  //   console.log("hello in create Exercise");
  try {
    const { name, duration, calories, date } = req.body;
    // ! const userId = req.userId;

    // Validate the name field
    // if (!validator.isLength(name, { min: 2, max: 50 })) {
    //   return res.status(400)json({ error: "Exercise name must be between 2 and 50 characters" });
    // }

    // // Validate duration as integer
    // if (!validator.isInt(String(duration))) {
    //   return res.status(400).json({ error: "Invalid duration value" });
    // }

    // // Validate calories as integer
    // if (!validator.isInt(String(calories))) {
    //   return res.status(400).json({ error: "Invalid calories value" });
    // }

    // ! const exercise = new Exercise({ userId, name, duration, calories });
    const exercise = new Exercise({ name, calories, date, duration });

    // console.log(exercise);
    // const newExercise = await exercise.save();
    const db = await dbConnect(); // Connect to MongoDB
    const result = await db.collection("exercises").insertOne(exercise);
    // Send a success or error response
    res.status(201).json({ message: "Exercise saved successfully", exercise });
  } catch (error) {
    console.error("Failed to save exercise");
    res.status(400).json({ message: err.message });
  }
});

// Export the router to use in your main application
module.exports = router;
