function deleteExercise(exerciseId) {
  // Make an API request to delete the exercise
  axios
    .delete(`/exercises/${exerciseId}`)
    .then((response) => {
      // Handle the response and update the UI accordingly
      console.log(response.data);
    })
    .catch((error) => {
      // Handle error scenarios
      console.error(error);
    });
}
