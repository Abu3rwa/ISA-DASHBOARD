import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import StudentRegistrationScreen from "./screens/StudentRegistrationScreen";
import StudentList from "./components/StudentsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/student-addmission"
          exact
          element={<StudentRegistrationScreen />}
        />
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/students" exact element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
