import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // This is important to avoid auto-registration issues

function ExerciseChart({ exerciseData }) {
  const chartData = {
    labels: exerciseData.map((dataPoint) =>
      new Date(dataPoint.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Calories Burned",
        data: exerciseData.map((dataPoint) => dataPoint.calories),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default ExerciseChart;
