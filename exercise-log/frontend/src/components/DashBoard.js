function Dashboard() {
  return (
    <div>
      <h2>Exercise Progress</h2>
      <ExerciseChart exerciseData={exerciseData} />
    </div>
  );
}
