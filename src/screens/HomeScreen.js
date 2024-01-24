import "./home.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentList from "../components/StudentsList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeScreen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }} className="home">
        <header className="header">
          {" "}
          <Typography
            className="teal"
            variant="h4"
            noWrap
            component="h"
            sx={{
              margin: 1,
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            ISA International School
          </Typography>
          <Box>
            <Tabs
              className="tabs"
              value={value}
              onChange={handleChange}
              aria-label=" "
            >
              <Tab label="Students Affairs" {...a11yProps(0)} />
              <Tab label="Employees Affairs" {...a11yProps(1)} />
              <Tab label="Finances" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </header>
        <div className="row col-12 home-body">
          <div className="col-3"></div>
          <div className="col-3 drawer">
            <CustomTabPanel value={value} index={0} className="drawer-list">
              <Typography variant="h4" className="tx-dark text-center m-3">
                Students Affairs
              </Typography>
              <li>Student Enrollment </li>
              <li>New Admissions </li>
              <li> Classes </li>
              <li>Events </li>
              <li>Fee Due Report </li>
              <li>Attendance </li>
              <li>New Joinees </li>
              <li>Upgrades </li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="drawer-list">
              <Typography variant="h4" className="tx-dark text-center m-2">
                Employees Affairs
              </Typography>
              <li>Salaries </li>
              <li>Loans </li>
              <li> recruitment and hiring</li>{" "}
              <li> attendance and time tracking</li>{" "}
              <li> training and development</li>{" "}
              <li> grievance handling and conflict resolution</li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="drawer-list">
              <Typography variant="h4" className="tx-dark text-center m-2">
                Finances
              </Typography>
              <li>Financial Statement </li>
              <li>Expenditure </li>
              <li>Incoming Fees </li>
              <li>Salary Payments </li>
              <li>School Assets </li>
              <li>Liabilities </li>

              {/* <li>Audits - Financial audit completed for FY20-21</li> */}
            </CustomTabPanel>
          </div>

          <div className="col-9 pt-5  ">
            Welcome to the Android App Development Assistant! I'm here to help
            you bring your app ideas to life. Whether you're a beginner or an
            experienced developer, I'll guide you through the entire app
            development process using React and other relevant frameworks. Feel
            free to share your app ideas, and together we'll refine them, create
            a detailed description, and break down the tasks needed for
            frontend, backend, database, and UI design. I'll provide you with
            code snippets, explanations, and instructions to help you implement
            the app feature by feature.Welcome to the Android App Development
            Assistant! I'm here to help you bring your app ideas to life.
            Whether you're a beginner or an experienced developer, I'll guide
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            you through the entire app development process using React and other
            relevant frameworks. Feel free to share your app ideas, and together
            we'll refine them, create a detailed description, and break down the
            tasks needed for frontend, backend, database, and UI design. I'll
            provide you with code snippets, explanations, and instructions to
            help you implement the app feature by feature.
          </div>
        </div>
      </Box>
    </div>
  );
}
