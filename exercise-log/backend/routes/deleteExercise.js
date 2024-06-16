const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../config/Database");
// const Exercise = require("../models/exercise");

// DELETE an exercise
router.delete("/exercises/:id", async (req, res) => {
  console.log("In delete", req.params.id);
  try {
    console.log(`Deleting exercise with id: ${req.params.id}`);
    const db = await dbConnect(); // Connect to MongoDB

    // Ensure the exercise ID is a valid ObjectId
    if (!ObjectId.isValid(req.params.id)) {
      console.log("Invalid exercise ID");
      return res.status(400).json({ message: "Invalid exercise ID" });
    }

    const exerciseId = new ObjectId(req.params.id);

    // Delete the exercise
    const result = await db
      .collection("exercises")
      .deleteOne({ _id: exerciseId });

    if (result.deletedCount === 0) {
      console.log("Exercise not found");
      return res.status(404).json({ message: "Exercise not found" });
    }

    console.log("Exercise deleted successfully");
    res.json({ message: "Exercise deleted" });
  } catch (err) {
    console.error(`Error deleting exercise: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// DELETE an exercise
// router.delete("/exercises/:id", async (req, res) => {
//   console.log("In delete", req.params.id);
//   try {
//     console.log(`Deleting exercise with id: ${req.params.id}`);
//     const exercise = await Exercise.findById(req.params.id);

//     if (!exercise) {
//       console.log("Exercise not found");
//       return res.status(404).json({ message: "Exercise not found" });
//     }

//     // await exercise.remove();
//     await Exercise.deleteOne({ _id: req.params.id });
//     console.log("Exercise deleted successfully");
//     res.json({ message: "Exercise deleted" });
//   } catch (err) {
//     console.error(`Error deleting exercise: ${err.message}`);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
