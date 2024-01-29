import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress color="primary" size={60} />
      <h5 className="text-center text-dark m-2">Loading... Please wait</h5>
    </div>
  );
}

export default Spinner;
