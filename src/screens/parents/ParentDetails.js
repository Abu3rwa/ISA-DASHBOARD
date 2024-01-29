import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid } from "@material-ui/core";
import Spinner from "../../components/common/Spinner";
import { axiosInstance } from "../../config/axiosInstance";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const ParentDetails = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [parent, setParent] = useState(null);

  useEffect(() => {
    fetchParent();
  }, []);

  const fetchParent = async () => {
    setLoading(true);
    try {
      const parentId = window.location.pathname.split("/").pop();
      const response = await axiosInstance.get(`/parents/gt-pById/${parentId}`);
      console.log(response.data);
      setParent(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching parent details:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6">{parent?.name}</Typography>
              <Typography variant="body1">Email: {parent?.email}</Typography>
              <Typography variant="body1">Phone: {parent?.phone}</Typography>
              <Typography variant="body1">
                Address: {parent?.address}
              </Typography>
              <Typography variant="body1">Gender: {parent?.gender}</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ParentDetails;
