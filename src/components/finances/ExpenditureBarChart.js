import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Bar, Pie } from "react-chartjs-2";
const ExpenditureBarChart = () => {
  const classes = useStyles();
  Chart.register(CategoryScale);

  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 6000, 4500, 7000, 5500, 8000],
        backgroundColor: "#00c50f",
      },
      {
        label: "Expenses",
        data: [4000, 4500, 5000, 5500, 6000, 6500],
        backgroundColor: "#d5004f",
      },
    ],
  };

  const pieChartData = {
    labels: ["Tuition Fees", "Transportation Fees", "Other Fees"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className={`${classes.parent} finances-container`}>
      <div className={`${classes.container} row col-12 p-3`}>
        <div className={`${classes.chartContainer} col-5`}>
          <Typography variant="h6" gutterBottom className="tx-dark">
            Fee Distribution
          </Typography>
          <Pie data={pieChartData} />
        </div>

        <div className={`${classes.chartContainer} col-5`}>
          <Typography variant="h6" gutterBottom className="tx-dark">
            Monthly Revenue and Expenses
          </Typography>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  parent: {
    flexDirection: "column",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    alignContent: "center",
  },
  chartContainer: {
    display: "flex",
    alignItems: "center",

    alignContent: "center",
    justifyContent: "center",
    height: 400,
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
}));
export default ExpenditureBarChart;
