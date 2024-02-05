import { useEffect, useState } from "react";
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
import cookies from "js-cookie";
import i18next from "i18next";
import CreateTimeTabeScreen from "./screens/academics/timetable/CreateTimeTabeScreen";
import "./App.css";
import "./bootstrap.min.css";
import "./index.css";
function App() {
  // const currentLanguageCode = localStorage.getItem("i18nextLng") || "ar";

  const token = localStorage.getItem("token");
  const [lan, setlan] = useState("");
  console.log("cookies: ", cookies.get("i18next"));
  useEffect(() => {}, [setlan]);
  const handleChangeLanuage = (code, c_code) => {
    i18next.changeLanguage(code);
    setlan(code);
    localStorage.setItem("i18nextLng", code);
    localStorage.setItem("c-code", c_code);
    window.location.reload();
  };
  return (
    <BrowserRouter>
      {token && <MyAppBar handleChangeLanuage={handleChangeLanuage} />}
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
