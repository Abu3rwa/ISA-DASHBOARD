import "./customSearch.css";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import { useLocation } from "react-router-dom";

export default function CustomSearch() {
  return (
    <div classname="search">
      <SearchIcon classname="icon" />
      <input placeholder="search by name or ID..." type="search" />
    </div>
  );
}
