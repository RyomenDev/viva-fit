const express = require("express");
const router = express.Router(); // Create a router object
const { dbConnect } = require("../config/Database");
// const { authenticate } = require("../middlewares/Authentication");
const { ObjectId } = require("mongodb");

// Get all exercises for a specific user
router.get("/exercises", async (req, res) => {
  try {
    // Logic to retrieve exercises from the database
    // const exercises = await Exercise.find();
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: "Missing userId parameter" });
    }

    // console.log("getAllExercise userId", userId);
    const db = await dbConnect(); // Connect to MongoDB
    const exercises = await db
      .collection("exercises")
      //   .find() //
      .find({ userId: new ObjectId(userId) }) // Filter by userId
      .toArray();
    // console.log("Fetched exercises for userId:", userId, exercises);
    // Send the retrieved exercises as the response
    res.json(exercises);
  } catch (error) {
    // console.error(error);
    console.error("Failed to retrieve exercises", error);
    res.status(500).json({ error: "Failed to retrieve exercises" });
  }
});

// Export the router to use in your main application
module.exports = router;
