// const exerciseForm = document.getElementById("exercise-form");
// exerciseForm.addEventListener("submit", handleFormSubmission);

// // let exercises = [];
// const exerciseData = [];

// function validateForm() {
//   //   event.preventDefault();
//   const exerciseName = document.getElementById("exercise-name").value;
//   const sets = document.getElementById("sets").value;
//   const reps = document.getElementById("reps").value;

//   if (exerciseName === "" || sets === "" || reps === "") {
//     alert("Please fill in all fields.");
//     return false; // Prevent form submission
//   }
//   //   else {
//   //     alert("Form submitted successfully!");
//   //     // this.submit();
//   //   }

//   //   const exerciseDetail = `Exercise: ${exerciseName}, Sets: ${sets}, Reps: ${reps}`;
//   //   exercises.push(exerciseDetail);
//   //   handleFormSubmission();
//   return true;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();

//   if (!validateForm()) return false;
//   const exerciseNameInput = document.getElementById("exercise-name");
//   const setsInput = document.getElementById("sets");
//   const repsInput = document.getElementById("reps");

//   const exerciseName = exerciseNameInput.value;
//   const sets = setsInput.value;
//   const reps = repsInput.value;

//   // Clear form fields after adding the exercise
//   document.getElementById("exercise-form").reset();

//   //   // Clear existing list
//   //   const exerciseListContainer = document.getElementById("exercise-list");
//   //   exerciseListContainer.innerHTML = "";
//   //   //   // Generate list items dynamically
//   //     exercises.forEach((exercise) => {
//   //       const listItem = document.createElement("li");
//   //       listItem.textContent = exercise;
//   //       exerciseListContainer.appendChild(listItem);
//   //     });

//   // Create an exercise object with the captured form data
//   const exercise = {
//     exerciseName,
//     sets,
//     reps,
//   };

//   // Add the exercise object to the exerciseData array or object
//   exerciseData.push(exercise);

//   displayLoggedExercises();
// }

// function displayLoggedExercises() {
//   // Get the container element where the logged exercises will be displayed
//   const exerciseListContainer = document.getElementById("exercise-list");

//   // Clear any existing exercise list
//   exerciseListContainer.innerHTML = "";

//   // Iterate over the exerciseData array or object to create and append exercise elements
//   exerciseData.forEach((exercise, index) => {
//     // Create a new list item element for each exercise
//     const exerciseItem = document.createElement("li");

//     // Set the text content of the list item to display the exercise details
//     exerciseItem.textContent = `Exercise: ${exercise.exerciseName} | Sets: ${exercise.sets} | Reps: ${exercise.reps}`;

//     // Append the list item to the exercise list container
//     exerciseListContainer.appendChild(exerciseItem);
//   });
// }
