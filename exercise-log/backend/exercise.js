const express = require("express");
const router = express.Router();
const Exercise = require("./models/exercise");

// GET /exercises - Get all exercises
router.get("/exercises", async (req, res) => {
  //   console.log("In Backend get Exercise");
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  //   Exercise.find()
  //     .then((exercises) => res.json(exercises))
  //     .catch((err) => res.status(400).json("Error: " + err));
  // POST a new exercise
});
router.post("/exercises", async (req, res) => {
  //   const exercise = new Exercise({
  //     name: req.body.name,
  //     calories: req.body.calories,
  //     date: req.body.date,
  //     duration: req.body.duration,
  //   });
  const { name, duration, calories, date } = req.body;
  const exercise = new Exercise({ name, calories, date, duration });
  console.log(exercise);
  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an exercise
router.delete("/exercises/:id", async (req, res) => {
  console.log("In delete", req.params.id);
  try {
    console.log(`Deleting exercise with id: ${req.params.id}`);
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      console.log("Exercise not found");
      return res.status(404).json({ message: "Exercise not found" });
    }

    // await exercise.remove();
    await Exercise.deleteOne({ _id: req.params.id });
    console.log("Exercise deleted successfully");
    res.json({ message: "Exercise deleted" });
  } catch (err) {
    console.error(`Error deleting exercise: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
});

// PUT to update an exercise
router.put("/exercises/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise)
      return res.status(404).json({ message: "Exercise not found" });

    exercise.name = req.body.name || exercise.name;
    exercise.calories = req.body.calories || exercise.calories;
    exercise.date = req.body.date || exercise.date;
    exercise.duration = req.body.duration || exercise.duration;

    
    const updatedExercise = await exercise.save();
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
