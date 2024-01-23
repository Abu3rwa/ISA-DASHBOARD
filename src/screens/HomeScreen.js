import "./home.css";
import React from "react";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";

function HomeScreen() {
  return (
    <div className="home">
      <PersistentDrawerLeft />
    </div>
  );
}

export default HomeScreen;
