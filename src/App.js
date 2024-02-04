import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect, useState } from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/common/HomeScreen";
import FinancesHomeScreen from "./screens/finances/FinancesHomeScreen";
import StudentsDetailsScreen from "./screens/students/StudentsDetailsScreen";
import StudentRegistrationScreen from "./screens/students/StudentRegistrationScreen";
import ParentInFormation from "./screens/parents/ParentInFormation";
import ParentDetails from "./screens/parents/ParentDetails";
import MyAppBar from "./components/common/MyAppBar";
import ParentsScreen from "./screens/parents/ParentsScreen";
import InstallmentsDetailsScreen from "./screens/parents/InstallmentsDetailsScreen";
import InstallmentsScreen from "./screens/parents/InstallmentsScreen";
import LoginScreen from "./screens/admin/LoginScreen";
import UserManagementScreen from "./screens/admin/UserManagementScreen";
import RegisterUserScreen from "./screens/admin/RegisterUserScreen";
import CreateTimeTabeScreen from "./screens/academics/timetable/CreateTimeTabeScreen";
function App() {
  const token = localStorage.getItem("token");
  const { t, i18n } = useTranslation();
  const [setter, setSetter] = useState("");
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [setter]);
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setSetter(i18n.language);
    console.log(i18n.language);
  };
  const [value, setValue] = useState(0);
  const lng = navigator.language;
  return (
    <BrowserRouter>
      {token && <MyAppBar changeLanguage={changeLanguage} />}
      <Routes>
        <Route
          path="/"
          exact
          element={token ? <HomeScreen /> : <LoginScreen />}
        />
        <Route path="/auth" exact element={<LoginScreen />} />
        {/* <Route path="/students" exact element={<StudentList />} /> */}
        <Route path="/finances" element={<FinancesHomeScreen />} />
        <Route path="/create-timetable" element={<CreateTimeTabeScreen />} />
        <Route path="/students/:id" element={<StudentsDetailsScreen />} />
        <Route path="/parent-info" element={<ParentInFormation />} />
        <Route
          path="/student-info"
          exact
          element={<StudentRegistrationScreen />}
        />
        <Route path="/parents" element={<ParentsScreen />} />
        <Route path="/register" exact element={<RegisterUserScreen />} />
        <Route
          path="/installments/:id"
          exact
          element={<InstallmentsDetailsScreen />}
        />
        <Route
          path="/all-installments/"
          exact
          element={<InstallmentsScreen />}
        />
        <Route path="/parent/:id" exact element={<ParentDetails />} />
        <Route path="/settings" exact element={<UserManagementScreen />} />
        <Route
          path="/student-info/:id"
          exact
          element={<StudentRegistrationScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
