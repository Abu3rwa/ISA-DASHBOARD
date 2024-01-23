import "./App.css";
import React from "react";
import "./bootstrap.min.css";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
