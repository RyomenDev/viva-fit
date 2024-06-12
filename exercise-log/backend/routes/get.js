const express = require("express");
const router = express.Router(); // Create a router object
const Exercise = require("../models/exercise");

// Get all exercises
router.get("/exercises", async (req, res) => {
  try {
    // Logic to retrieve exercises from the database
    const exercises = await Exercise.find();
    // Send the retrieved exercises as the response
    // console.log(exercises);
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve exercises" });
  }
});


// Export the router to use in your main application
module.exports = router;
