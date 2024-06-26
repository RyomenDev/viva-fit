import "../css/home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";

import ExerciseCreateForm from "../components/CreateExercise";
import ExerciseChart from "../components//ExerciseChart";
import ExerciseList from "../components//ExerciseList";

const dummyExercises = [
  {
    _id: "1",
    name: "Exercise 1",
    calories: 100,
    date: "2024-01-01",
    duration: 30,
  },
  {
    _id: "2",
    name: "Exercise 2",
    calories: 200,
    date: "2024-01-02",
    duration: 45,
  },
  {
    _id: "3",
    name: "Exercise 3",
    calories: 150,
    date: "2024-01-03",
    duration: 60,
  },
];

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [userId, setUserId] = useState(null);
  //   const [addExercises, setAddExercises] = useState([]);

  const location = useLocation();
  const message = location.state?.message;

  //   useEffect(() => {
  //     const fetchExercises = async () => {
  //       try {
  //         const token = localStorage.getItem("token");
  //         // console.log("token", token);
  //         if (token) {
  //           console.log("user verified");
  //           const decodedToken = jwtDecode(token);
  //           setUserId(decodedToken.userId); // Set userId from decoded token

  //           //   console.log("in frontend", decodedToken.userId);

  //           const response = await axios.get(`${BASE_URL}/exercises`, {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //             params: {
  //               userId: decodedToken.userId,
  //             },
  //           });
  //           setExercises(response.data);
  //         } else {
  //           setExercises(dummyExercises); // Set dummy exercises if no token found
  //         }
  //       } catch (error) {
  //         console.error("Error fetching exercises", error);
  //         if (error.response && error.response.status === 400) {
  //           localStorage.removeItem("token"); // Remove invalid token
  //           setExercises(dummyExercises); // Set dummy exercises if token is invalid
  //         } else {
  //           setExercises(dummyExercises); // Set dummy exercises in case of other errors
  //         }
  //       }
  //     };

  //     fetchExercises();
  //   }, [message]);

  //   const addExercise = (newExercise) => {
  //     setExercises((prevExercises) => [...prevExercises, newExercise]);
  //   };

  //   const deleteExercise = async (id, createUserId) => {
  //     // console.log("Delete ID", id);
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         throw new Error("No token found");
  //       }

  //       await axios.delete(`${process.env.REACT_APP_BASE_URL}/exercises/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           createUserId: createUserId,
  //         },
  //       });
  //       setExercises(exercises.filter((exercise) => exercise._id !== id));
  //       //   console.log("Exercise deleted successfully");
  //     } catch (error) {
  //       console.error("Error deleting exercise", error);
  //     }
  //   };

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.userId);

          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Set actual exercises from backend or dummy exercises if no token found
          setExercises(
            token
              ? await fetchExercisesFromBackend(decodedToken.userId, token)
              : dummyExercises
          );
        } else {
          setExercises(dummyExercises); // Set dummy exercises if no token found
        }
      } catch (error) {
        console.error("Error fetching exercises", error);
        setExercises(dummyExercises); // Set dummy exercises in case of error
      }
    };

    fetchExercises();
  }, [message]);

  const fetchExercisesFromBackend = async (userId, token) => {
    try {
      const response = await axios.get(`${BASE_URL}/exercises`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching exercises from backend", error);
      throw error;
    }
  };

  const addExercise = (newExercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise._id !== id));
  };

  const editExercise = (updatedExercise) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise._id === updatedExercise._id ? updatedExercise : exercise
      )
    );
  };

  return (
    <div>
      {/* <h1>Exercises</h1> */}
      <ExerciseCreateForm addExercise={addExercise} />
      <div className="exercise-chart">
        <ExerciseChart exerciseData={exercises} />
      </div>
      <ExerciseList
        exercises={exercises}
        setExercises={setExercises}
        onDelete={deleteExercise}
        userId={userId}
        onEdit={editExercise}
      />
    </div>
  );
};

export default Home;
