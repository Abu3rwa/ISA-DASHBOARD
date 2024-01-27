import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import StudentRegistrationScreen from "./screens/StudentRegistrationScreen";
import StudentList from "./components/StudentsList";
import StudentsDetailsScreen from "./screens/StudentsDetailsScreen";
import FinancesHomeScreen from "./screens/finances/FinancesHomeScreen";
import MyAppBar from "./components/common/MyAppBar";

function App() {
  return (
    <BrowserRouter>
      {/* <MyAppBar /> */}
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/students" exact element={<StudentList />} />
        <Route path="/finances" exact element={<FinancesHomeScreen />} />
        <Route path="/students/:id" exact element={<StudentsDetailsScreen />} />
        <Route
          path="/students-addmission"
          exact
          element={<StudentRegistrationScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
