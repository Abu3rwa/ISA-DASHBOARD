import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
    display: "flex",
    flexWrap: "wrap",
    height: "80vh",
    justifyContent: "space-around",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      //   width: theme.spacing(16),
      //   height: theme.spacing(16),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    height: 250,
    display: "flext",
    flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 17,
    width: "fit-content",
  },
}));

export default function HomePageAdminButtons() {
  const classes = useStyles();

  return (
    <div className={`${classes.root}   `}>
      <Paper className={`${classes.paper} col-4 row`}>
        <Typography className="col-11  tx-dark m-2" variant="h5">
          Finances
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={`${classes.button}`}
        >
          <Link className="btn-link" to="finances">
            Financial Statement
          </Link>
        </Button>

        <Button
          variant="outlined"
          color="primary"
          className={`${classes.button}`}
        >
          <Link className="btn-link" to="finances">
            School Assets
          </Link>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={`${classes.button}`}
        >
          <Link className="btn-link" to="finances">
            Liabilities
          </Link>
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={`${classes.button}`}
        >
          <Link className="btn-link" to="finances">
            Liabilities
          </Link>
        </Button>
      </Paper>
      <Paper className={`${classes.paper} col-4 row`}>
        <Typography className="col-11" variant="h5 tx-dark m-2">
          Finances
        </Typography>
        <Link className="btn-link" to="finances">
          <Button
            variant="outlined"
            color="primary"
            className={`${classes.button}`}
          >
            Financial Statement
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="secondary"
          className={`${classes.button}`}
        >
          Button 2
        </Button>
        <Button variant="outlined" className={`${classes.button}`}>
          Button 3
        </Button>
        <Button variant="text" className={`${classes.button}`}>
          Button 4
        </Button>
      </Paper>

      {/* Repeat the papers as needed */}
    </div>
  );
}
