const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { dbConnect } = require("../config/Database");
// const Exercise = require("../models/exercise");

// PUT to update an exercise
router.put("/exercises/:id", async (req, res) => {
  try {
    const db = await dbConnect(); // Connect to MongoDB

    const exerciseId = req.params.id;

    // Ensure exerciseId is a valid ObjectId
    if (!ObjectId.isValid(exerciseId)) {
      return res.status(400).json({ message: "Invalid exercise ID" });
    }

    const updatedExerciseData = {
      name: req.body.name,
      calories: req.body.calories,
      date: req.body.date,
      duration: req.body.duration,
    };

    // Update the exercise
    const result = await db
      .collection("exercises")
      .updateOne(
        { _id: new ObjectId(exerciseId) },
        { $set: updatedExerciseData }
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    // Retrieve the updated exercise
    const updatedExercise = await db
      .collection("exercises")
      .findOne({ _id: new ObjectId(exerciseId) });

    console.log("done");
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

// PUT to update an exercise
// router.put("/exercises/:id", async (req, res) => {
//   try {
//     const exercise = await Exercise.findById(req.params.id);
//     if (!exercise)
//       return res.status(404).json({ message: "Exercise not found" });

//     exercise.name = req.body.name || exercise.name;
//     exercise.calories = req.body.calories || exercise.calories;
//     exercise.date = req.body.date || exercise.date;
//     exercise.duration = req.body.duration || exercise.duration;

//     const updatedExercise = await exercise.save();
//     res.json(updatedExercise);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.put("/exercises/:id", async (req, res) => {
//   const { name, duration, calories, date } = req.body;
//   const exerciseId = req.params.id;
//   console.log("in edit exercise");
//   try {
//     // Find the exercise by its ID and update its fields
//     const exercise = await Exercise.findByIdAndUpdate(
//       exerciseId,
//       { name, duration, calories, date },
//       { new: true }
//     );

//     res.json(exercise);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to update the exercise" });
//   }
// });

// module.exports = router;
