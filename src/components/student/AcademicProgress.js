import React from "react";
import { Bar } from "react-chartjs-2";

const StudentProgressChart = () => {
  const subjectScores = {
    Math: 85,
    Science: 70,
    English: 95,
    History: 60,
    Geography: 75,
    Physics: 80,
    Chemistry: 90,
    Biology: 65,
  };

  const getSubjectColors = (score) => {
    if (score >= 90) {
      return "rgba(75, 192, 192, 0.7)"; // Green
    } else if (score >= 80) {
      return "rgba(255, 206, 86, 0.7)"; // Yellow
    } else if (score >= 70) {
      return "rgba(255, 159, 64, 0.7)"; // Orange
    } else {
      return "rgba(255, 99, 132, 0.7)"; // Red
    }
  };

  const chartData = {
    labels: Object.keys(subjectScores),
    datasets: [
      {
        data: Object.values(subjectScores),
        backgroundColor: Object.values(subjectScores).map((score) =>
          getSubjectColors(score)
        ),
      },
    ],
  };

  return (
    <div className="academic-progress-chart">
      <h6>Student Progress Chart</h6>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default StudentProgressChart;
