import React, { useState } from "react";
import axios from "axios";
import "../css/form.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// const ExerciseCreateForm = ({ addExercises, setAddExercises }) => {
const ExerciseCreateForm = ({ addExercise }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  //   const addExercise = (newExercise) => {
  //     console.log("newExercise", newExercise);
  //     setAddExercises((prevExercises) => [...prevExercises, newExercise]);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create an exercise object with the form data
    const exercise = { name, calories, date, duration };
    // console.log(name, calories, date, duration);
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem("token");
      if (!token) {
        // Show alert and add exercise to temporary list
        alert("No user is logged in. The exercise will not be saved.");
        addExercise(exercise);
        resetForm();
        return;
      }

      //   const response = await axios.post(`${BASE_URL}/exercises`, exercise);
      const response = await axios.post(`${BASE_URL}/exercises`, exercise, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("response got", response.data);
      // Call the addExercise function with the response data to update the state - rendering in frontend
      addExercise(response.data.exercise);
      // Reset the form
      resetForm();
    } catch (error) {
      console.error("Error adding exercise:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setCalories("");
    setDate("");
    setDuration("");
  };

  return (
    <div className="exercise-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Exercise-Name">
            Exercise Name:
            <input
              id="exercise-name"
              type="text"
              value={name}
              placeholder="Enter Exercise Name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Calories-Burned">
            Calories Burned:
            <input
              id="calories-burned"
              type="number"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Date">
            Date:
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="Duration">
            Duration (in minutes):
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add Exercise</button>
        </div>
      </form>
    </div>
  );
};
export default ExerciseCreateForm;

//   const handleSubmit = async (e) => {
//     // console.log("in handleSubmit");
//     e.preventDefault();
//     // Create an exercise object with the form data
//     const exercise = { name, calories, date, duration };
//     // Make an API request to create the exercise
//     await axios
//       .post(`${BASE_URL}/exercises`, exercise)
//       //   .post("http://localhost:5000/exercises", exercise)
//       .then((response) => {
//         // Handle the response and update the UI accordingly
//         console.log("response", response.data);
//         // reset the form here
//         setName("");
//         setCalories("");
//         setDate("");
//         setDuration("");
//       })
//       .catch((error) => {
//         // Handle error scenarios
//         console.error(error);
//       });
//   };
