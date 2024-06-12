const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
    name: {
      type: String,
    //   required: true, // Assuming 'calories' is required
    },
  duration: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
