import React, { useEffect, useState } from "react";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  TextField,
  Button,
  CssBaseline,
} from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import logo from "../../assets/images/school-logo.png";
import today from "../../helpers/today";
import { loginCall } from "../../redux/api_Calls/authCalls";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/common/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    minDidth: "100vw",
    margin: 0,
  },
  header: {
    marginBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  titleContailer: {
    position: "absolute",
    top: "20px",
    left: "30px",
  },

  logo: {
    marginRight: theme.spacing(1),
    height: "70px",
    width: "70px",
    // background: "white",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
}));

const RegisterUserScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const token = useSelector((state) => state.user.token);
  let error = useSelector((state) => state.user.error);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const user = { password: password, email: email };
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const classes = useStyles();
  const weekDay = time.toDateString().split(" ")[0];
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={`${classes.root} teal pt-5`}>
          <h1 className={`${classes.title} teal`}> ISA International School</h1>
          <div className={classes.titleContailer}>
            <h3 className="tx-dark mt-5">Date: {today}</h3>
            <h3
              className={` mt-5 time ${
                time.getHours > 8 && time.getMinutes < 30 ? "late" : "on-time"
              }`}
            >
              Time:
              {` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time
                .toLocaleTimeString()
                .split(" ")
                .pop()}`}
            </h3>
          </div>

          <CssBaseline />
          <Container maxWidth="xs">
            <div className={classes.header}>
              <img src={logo} className={classes.logo} />
            </div>

            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
                loginCall(user, dispatch);
                setTimeout(() => {
                  error = "";
                }, 3000);
              }}
            >
              <h1 className={`${classes.title}  text-center  tx-dark`}>
                User Registeration
              </h1>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    type="text"
                    required
                    InputProps={{
                      startAdornment: <Email className="m-2" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    type="text"
                    required
                    InputProps={{
                      startAdornment: <Email className="m-2" />,
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    // type="password"
                    required
                    InputProps={{
                      startAdornment: <Lock className="m-2" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <h5 className="text-danger text-center">{error && error}</h5>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};

export default RegisterUserScreen;
