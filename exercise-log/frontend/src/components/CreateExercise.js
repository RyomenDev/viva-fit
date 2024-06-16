import React, { useState } from "react";
import axios from "axios";
import "../css/form.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ExerciseCreateForm = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    console.log("in handleSubmit");
    e.preventDefault();

    // Create an exercise object with the form data
    const exercise = { name, calories, date, duration };

    console.log(name, calories, date, duration);
    // Make an API request to create the exercise
    await axios
      .post(`${BASE_URL}/exercises`, exercise)
    //   .post("http://localhost:5000/exercises", exercise)
      .then((response) => {
        // Handle the response and update the UI accordingly
        console.log("response", response.data);
        //reset the form here
        // setName("");
        // setCalories("");
        // setDate("");
        // setDuration("");
      })
      .catch((error) => {
        // Handle error scenarios
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} id="exercise-form">
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
  );
};
export default ExerciseCreateForm;