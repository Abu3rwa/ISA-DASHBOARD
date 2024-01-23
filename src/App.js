import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import StudentRegistrationScreen from "./screens/StudentRegistrationScreen";
import StudentList from "./components/StudentsList";
import StudentsDetailsScreen from "./screens/StudentsDetailsScreen";
import MyAppBar from "./components/MyAppBar";

function App() {
  return (
    <BrowserRouter>
      <MyAppBar />
      <Routes>
        <Route
          path="/student-addmission"
          exact
          element={<StudentRegistrationScreen />}
        />
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/students" exact element={<StudentList />} />
        <Route path="/students/:id" exact element={<StudentsDetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
