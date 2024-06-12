// Make a GET request to retrieve exercises
fetch("http://localhost:5000/exercises")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Handle the retrieved exercises data
  })
  .catch((error) => {
    console.error("Failed to retrieve exercises:", error);
  });
