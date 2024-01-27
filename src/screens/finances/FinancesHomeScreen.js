import React from "react";
import ExpenditureBarChart from "../../components/finances/ExpenditureBarChart";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/school-logo.png";
import "./financesHomeScreen.css";
function FinancesHomeScreen() {
  return (
    <div className="row finances-home-screen">
      <header className="header col-12 px-4">
        <Typography
          className="teal "
          variant="h4"
          noWrap
          sx={{
            margin: 1,
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
          }}
        >
          <img className="logo" src={logo} />
          ISA International School
        </Typography>
        <Typography variant="h4" className="tx-dark text-center">
          Financial Dashboard
        </Typography>
      </header>
      <ExpenditureBarChart />
    </div>
  );
}

export default FinancesHomeScreen;
