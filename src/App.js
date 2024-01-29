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

function App() {
  return (
    <BrowserRouter>
      <MyAppBar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        {/* <Route path="/students" exact element={<StudentList />} /> */}
        <Route path="/finances" exact element={<FinancesHomeScreen />} />
        <Route path="/students/:id" exact element={<StudentsDetailsScreen />} />
        <Route path="/parent-info" exact element={<ParentInFormation.js />} />
        <Route path="/parents" exact element={<ParentsScreen />} />
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
