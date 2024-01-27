import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress color="primary" size={60} />
      <Typography variant="h5" className="text-center text-dark m-2">
        Loading... Please wait
      </Typography>
    </div>
  );
}

export default Spinner;
