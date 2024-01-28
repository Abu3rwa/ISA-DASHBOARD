import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@material-ui/core";
import { Person, Email, Phone, Home, Wc } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import Spinner from "../components/common/Spinner";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",

    backgroundColor: "#e0f2f1", // Teal background color
    borderRadius: "10px",
  },
  container: {
    paddingTop: "100px",
  },
  field: {
    fontSize: 17,
    marginBottom: "20px",
    fontSize: "17px",
    padding: "4px",
  },
}));

const ParentInfoFormation = () => {
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  let parentId;
  async function handleSubmit(e) {
    e.preventDefault();

    const parent = { phone, email, name, address, gender };
    console.log(parent);

    try {
      setLoading(true);

      const response = await axiosInstance.post("/parents/create", parent, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const id = response.data.id;

      if (response.data) {
        setLoading(false);
        // alert(response.data.msg);

        setTimeout(() => {
          window.location.replace("/student-info/" + id);
        }, 1000);
      }
      // Reset the form fields if needed
      setPhone("");
      setEmail("");
      setName("");
      setAddress("");
      setGender("");
    } catch (error) {
      console.error(error.message); // Handle any error that occurred during the request
    }
  }
  return (
    <div className={classes.container}>
      {loading ? (
        <Spinner />
      ) : (
        <form className={classes.form}>
          <h4 className="teal mb-4 text-center">Enter Parent Information</h4>
          <TextField
            required
            onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Name"
            placeholder="Name"
            variant="outlined"
            InputProps={{
              startAdornment: <Person />,
            }}
          />
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            className={classes.field}
            label="Email"
            placeholder="Email"
            variant="outlined"
            InputProps={{
              startAdornment: <Email />,
            }}
          />
          <TextField
            required
            onChange={(e) => setPhone(e.target.value)}
            className={classes.field}
            label="Phone"
            type="number"
            placeholder="Phone"
            variant="outlined"
            InputProps={{
              startAdornment: <Phone />,
            }}
          />
          <TextField
            required
            onChange={(e) => setAddress(e.target.value)}
            className={classes.field}
            label="Address"
            placeholder="Address"
            variant="outlined"
            InputProps={{
              startAdornment: <Home />,
            }}
          />
          <div className={classes.field}>
            <InputLabel>Gender</InputLabel>
            <Select
              onChange={(e) => setGender(e.target.value)}
              label="Gender"
              placeholder="Gender"
              startAdornment={<Wc />}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </div>
          <div className="align-row-items">
            <Link className="link" to="/">
              <Button variant="contained" color="secondary">
                Back
              </Button>
            </Link>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ParentInfoFormation;
