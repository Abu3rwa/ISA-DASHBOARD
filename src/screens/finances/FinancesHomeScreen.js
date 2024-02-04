import React from "react";
import ExpenditureBarChart from "../../components/finances/ExpenditureBarChart";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/school-logo.png";
import "./financesHomeScreen.css";
function FinancesHomeScreen() {
  return (
    <div className="row finances-home-screen">
      <ExpenditureBarChart />
    </div>
  );
}

export default FinancesHomeScreen;
