import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/common/HomeScreen";
import FinancesHomeScreen from "./screens/finances/FinancesHomeScreen";
import StudentsDetailsScreen from "./screens/students/StudentsDetailsScreen";
import StudentRegistrationScreen from "./screens/students/StudentRegistrationScreen";
import ParentInFormation from "./screens/parents/ParentInFormation";
import ParentDetails from "./screens/parents/ParentDetails";
import MyAppBar from "./components/common/MyAppBar";
import ParentsScreen from "./screens/parents/ParentsScreen";
import InstallmentsScreen from "./screens/parents/Installments";
import LoginScreen from "./screens/admin/LoginScreen";
import { useSelector } from "react-redux";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {token && <MyAppBar />}
      <Routes>
        <Route
          path="/"
          exact
          element={token ? <HomeScreen /> : <LoginScreen />}
        />
        <Route path="/auth" exact element={<LoginScreen />} />
        {/* <Route path="/students" exact element={<StudentList />} /> */}
        <Route path="/finances" exact element={<FinancesHomeScreen />} />
        <Route path="/students/:id" exact element={<StudentsDetailsScreen />} />
        <Route path="/parent-info" exact element={<ParentInFormation />} />
        <Route
          path="/student-info"
          exact
          element={<StudentRegistrationScreen />}
        />
        <Route path="/parents" exact element={<ParentsScreen />} />
        <Route
          path="/installments/:id"
          exact
          element={<InstallmentsScreen />}
        />
        <Route path="/parent/:id" exact element={<ParentDetails />} />
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
