import { Language } from "@material-ui/icons";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ParenstsScreen from "../parents/ParentsScreen";
import StudentssScreen from "../students/studentsScreen";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import FinancesHomeScreen from "../finances/FinancesHomeScreen";
import EmployeeManagement from "../employees/EmployeeManagement";
import LandingScreen from "./LandingScreen";
import arabic_translations from "../../translations/ar";
import "./home.css";

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
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const [value, setValue] = useState(0);
  const lng = navigator.language;
  console.log(lng);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  console.log(arabic_translations);
  return (
    <div>
      <Box sx={{ width: "100%" }} className="home">
        <select
          labelId="language-select-label"
          className="language"
          id="language-select"
          value={i18n.language}
          onChange={changeLanguage}
          endIcon={<Language />}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
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
          {" "}
          <div className="col-3"></div>
          <div className="col-3 drawer">
            <CustomTabPanel value={value} index={0} className="drawer-list ">
              <h4 className="tx-dark text-center ">{t("studentsAffairs")}</h4>
              <Link className="link-dark" to="students">
                <li>{t("students")} </li>
              </Link>
              <li>{t("attendance")} </li>
              <Link className="link-dark" to="parent-info">
                <li>{t("studentEnrollment")} </li>
              </Link>
              {/* <Link className="link"></Link> */}
              <li> {t("classes")} </li>{" "}
              <Link className="link-dark" to="create-timetable">
                <li> {t("timetables")}</li>
              </Link>
              <li>{t("events")} </li>
              <li>{t("upgrades")} </li>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="drawer-list ">
              <Link className="link-dark" to={`/all-installments`}>
                <li>Pay Tuition </li>
              </Link>
              <Link className="link-dark" to={`/all-installments`}>
                <li>Installments </li>
              </Link>
              <Link className="link-dark" to={`/all-installments`}>
                <li>Communication </li>
              </Link>
              <li>Meetings </li>{" "}
              <Link className="link-dark" to={`/all-installments`}>
                <li>Reports </li>
              </Link>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="drawer-list ">
              <Typography variant="h4" className="tx-dark text-center m-2">
                Employees Affairs
              </Typography>
              <li>Employees </li>
              <li>Salaries </li>
              <li>Loans </li>
              <li> Recruitment and hiring</li>
              <li> attendance </li>
              <li> training and development</li>
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
            <div className="settings-container">
              <Link to="/settings" className="link">
                <Button variant="outlined" color="primary" type="submit">
                  System Settings
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-9   ">
            {value === 1 ? (
              <ParenstsScreen />
            ) : value == 0 ? (
              <StudentssScreen />
            ) : value == 2 ? (
              <EmployeeManagement />
            ) : value == 3 ? (
              <FinancesHomeScreen />
            ) : (
              <LandingScreen />
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}
