// // Make a GET request to retrieve exercises
// fetch("http://localhost:5000/exercises")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Handle the retrieved exercises data
//   })
//   .catch((error) => {
//     console.error("Failed to retrieve exercises:", error);
//   });

// useEffect(() => {
//   axios
//     .get("/exercises")
//     .then((response) => {
//       const exercises = response.data;
//       // Update the state or pass the data to the charting component
//       setExercises(exercises);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, []);

// const exerciseData = exercises.map((exercise) => ({
//   date: exercise.date,
//   caloriesBurned: exercise.calories,
// }));

// function ExerciseList({ exercises }) {
//   return (
//     <ul>
//       {exercises.map((exercise) => (
//         <li key={exercise.id}>
//           <span>{exercise.name}</span>
//           <span>Date: {exercise.date}</span>
//           <span>Duration: {exercise.duration} minutes</span>
//         </li>
//       ))}
//     </ul>
//   );
// }


