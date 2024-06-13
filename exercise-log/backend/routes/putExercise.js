router.put("/exercises/:id", async (req, res) => {
  const { name, duration, calories, date } = req.body;
  const exerciseId = req.params.id;

  try {
    // Find the exercise by its ID and update its fields
    const exercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      { name, duration, calories, date },
      { new: true }
    );

    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the exercise" });
  }
});
