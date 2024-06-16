const express = require("express");
const router = express.Router(); // Create a router object
const Exercise = require("../models/exercise");
const { dbConnect } = require("../config/Database");

// Get all exercises
router.get("/exercises", async (req, res) => {
  try {
    // Logic to retrieve exercises from the database
    // const exercises = await Exercise.find();
    const db = await dbConnect(); // Connect to MongoDB
    const exercises = await db.collection("exercises").find().toArray();
    // !console.log(exercises);
    // Send the retrieved exercises as the response
    res.json(exercises);
  } catch (error) {
    // console.error(error);
    console.error("Failed to retrieve exercises");
    res.status(500).json({ error: "Failed to retrieve exercises" });
  }
});

// Export the router to use in your main application
module.exports = router;
