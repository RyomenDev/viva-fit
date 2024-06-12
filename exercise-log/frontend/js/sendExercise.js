// Example exercise data
const exerciseData = {
  name: "Push-ups",
  duration: 10,
  calories: 50,
};

// Make a POST request to create a new exercise
fetch("http://localhost:5000/exercises", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(exerciseData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Handle the response data
  })
  .catch((error) => {
    console.error("Failed to create exercise:", error);
  });
