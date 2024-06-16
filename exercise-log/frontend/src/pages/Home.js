import "../css/form.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExerciseChart from "../components//ExerciseChart";
import ExerciseList from "../components//ExerciseList";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/exercises`);
        console.log("response data 1", response.data);
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises", error);
      }
    };

    fetchExercises();
  }, []);

  const deleteExercise = async (id) => {
    console.log("Delete ID", id);
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/exercises/${id}`);
      setExercises(exercises.filter((exercise) => exercise._id !== id));
      console.log("Exercise deleted successfully");
    } catch (error) {
      console.error("Error deleting exercise", error);
    }
  };

  return (
    <div>
      <h1>Exercises</h1>
      <ExerciseChart exerciseData={exercises} />
      <ExerciseList
        exercises={exercises}
        setExercises={setExercises}
        onDelete={deleteExercise}
      />
    </div>
  );
};

export default Home;
