import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./home.css";
import HomePageAdminButtons from "../../components/common/HomePageAdminButtons";
import ParenstsScreen from "../parents/ParentsScreen";
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
  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }} className="home">
        <header className="header col-12 p-0">
          <Tabs
            className="tabs"
            value={value}
            onChange={handleChange}
            aria-label=" "
          >
            <Tab label="Students Affairs" {...a11yProps(0)} />
            <Tab label="Parents" {...a11yProps(1)} />
            <Tab label="Employees Affairs" {...a11yProps(2)} />
            <Tab label="Finances" {...a11yProps(3)} />
          </Tabs>
        </header>
        <div className="row col-12 home-body">
          <div className="col-3"></div>
          <div className="col-3 drawer">
            <CustomTabPanel value={value} index={0} className="drawer-list ">
              <Typography variant="h4" className="tx-dark text-center ">
                Students Affairs
              </Typography>
              <Link className="link-dark" to="students">
                <li>Students </li>
              </Link>
              <Link className="link-dark" to="parents">
                <li>Parents </li>
              </Link>
              <Link className="link-dark" to="parent-info">
                <li>Student Enrollment </li>
              </Link>
              {/* <Link className="link"></Link> */}
              <li> Classes </li>
              <li>Events </li>
              <li>Fee Due Report </li>
              <li>Attendance </li>
              <li>New Joinees </li>
              <li>Upgrades </li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="drawer-list ">
              {/* <Typography variant="h4" className="tx-dark text-center m-2">
                Parents
              </Typography> */}
              <li>Pay Tuition </li>
              <li>Installments </li>
              <li>Meetings </li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="drawer-list ">
              <Typography variant="h4" className="tx-dark text-center m-2">
                Employees Affairs
              </Typography>
              <li>Employees </li>
              <li>Salaries </li>
              <li>Loans </li>
              <li> recruitment and hiring</li>
              <li> attendance and time tracking</li>
              <li> training and development</li>
              <li> grievance handling and conflict resolution</li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3} className="drawer-list ">
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

          <div className="col-9   ">
            {value === 1 ? <ParenstsScreen /> : <HomePageAdminButtons />}
          </div>
        </div>
      </Box>
    </div>
  );
}
