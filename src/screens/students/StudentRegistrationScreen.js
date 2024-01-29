import "./studentRegisteration.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import { CurrencyBitcoin, Discount } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextareaAutosize,
  Button,
  FormGroup,
  Card,
} from "@material-ui/core";
import "firebase/firestore";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "space-around",
    // alignItems: "center",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#e0f2f1", // Teal background color
    borderRadius: "10px",
  },

  field: {
    marginBottom: "20px",
  },
}));
const StudentRegistrationScreen = () => {
  const classes = useStyles();

  const [studentId, setStudentId] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [totalTuition, setTotalTuition] = useState(0);
  const [paidTuition, setPaidTuition] = useState(0);
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [grade, setGrade] = useState(0);
  const [section, setSection] = useState("");
  const [remaining, setRemaining] = useState("");
  const [dateToPayRemaining, setdateToPayRemaining] = useState("");
  const [dateOfPaying, setDateOfPaying] = useState("");
  const [note, setNote] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [discount, setDiscount] = useState(0);
  const [currency, setCurrency] = useState("");

  const [notes, setNotes] = useState("");
  const student = {
    studentId,
    englishName,
    arabicName,
    dateOfBirth,
    gender,
    phoneNumber,
    email,
    address,
    emergencyContact,
    enrollmentDate,
    grade,
    section,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const discountsList = [];

  for (let i = 0; i <= 30; i++) {
    discountsList.push(i);
  }

  const ageList = [];
  console.log(student);
  for (let i = 6; i <= 18; i++) {
    ageList.push(i);
  }
  return (
    <div className="student-registeration pt-5">
      <Typography variant="h4" className="tx-dark m-4">
        Student's Registeration
      </Typography>

      <FormGroup
        onSubmit={handleSubmit}
        className={`  row col-12 form-container`}
      >
        <div className={`${classes.form} row col-6  `}>
          <Card className={`  row col-12 form-card p-3`}>
            <Typography variant="h4" className="tx-dark m-4">
              Basic Information
            </Typography>
            <div className="input-container">
              <label className="label">Arabic Name</label>
              <input
                className="input"
                placeholder="Arabic Name"
                value={arabicName}
                onChange={(e) => setArabicName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="name" className="label">
                English Name
              </label>
              <input
                id="name"
                className="input"
                placeholder="English Name"
                value={englishName}
                onChange={(e) => setEnglishName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="address" className="label">
                Address
              </label>
              <input
                id="address"
                className="input"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="row-data">
              <div>
                <label className="label">Date of Birth</label>
                <input
                  className="input"
                  placeholder="Date of Birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Gender</label>
                <select
                  className="input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <div>
                  <label className="label">Age</label>
                  <select
                    id="gge"
                    className="input"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Age
                    </option>

                    {ageList.map((years) => (
                      <option value={`${years}`}>{`${years} years`}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>{" "}
          </Card>
        </div>
        <div className={`${classes.form} row col-5  `}>
          <Card className={`${classes.form}  col-12 form-card mt-3`}>
            <dev className="form-data">
              <Typography variant="h5" className="tx-dark mb-3">
                Contacts Information
              </Typography>
              <div className="input-container">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>{" "}
              <div className="row-data">
                <div className="input-container">
                  <label htmlFor="emergencyContact" className="label">
                    Emergency Contact
                  </label>
                  <input
                    id="emergencyContact"
                    className="input"
                    placeholder="Emergency Contact"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    required
                  />
                </div>{" "}
                <div>
                  <label className="label">Phone Number</label>
                  <input
                    className="input"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </dev>
          </Card>
          <Card className={`  col-12 form-card p-3`}>
            <Typography variant="h5" className="tx-dark mb-3">
              Academic Information
            </Typography>

            <div className="row-data">
              <div>
                <label className="label">
                  Section
                  <small className="text-grey"> nation / international</small>
                </label>
                <select
                  className="input"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    select section
                  </option>
                  <option value="National">National</option>
                  <option value="Internation">Internation</option>
                </select>
              </div>
              <div>
                <label className="label">Grade</label>
                <select
                  className="input"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    grade
                  </option>

                  {ageList.map((years) => (
                    <option value={`${years}`}>{`${years} years`}</option>
                  ))}
                </select>
              </div>{" "}
            </div>
            <div className="align-row-items mt-2 ">
              <Link className="link" to="#">
                <Button variant="contained" color="secondary" className="h5">
                  Register Student
                </Button>
              </Link>
              <Button
                className="h5 teal-bg"
                type="submit"
                variant="outlined"
                color="primary"
              >
                Pay Fees
              </Button>
            </div>
          </Card>
          {/* <Card className={`${classes.form}  col-12 form-card mt-3`}>
            <dev onSubmit={handleSubmit} className="form-data">
              <Typography variant="h5" className="tx-dark mb-3">
                Finantial Information
              </Typography>
              <div className="row-data">
                <div>
                  <label className="label">Currency</label>
                  <select
                    className="input"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    startIcon={<CurrencyBitcoin />}
                    label="Curency"
                  >
                    <option value="male">US Dollar</option>
                    <option value="female">Lybian Dinar</option>
                  </select>
                </div>
                <div>
                  <label className="label">Discount</label>
                  <select
                    className="input"
                    value={setDiscount}
                    onChange={(e) => setDiscount(e.target.value)}
                    label="Discount"
                  >
                    {discountsList.map((discount) => (
                      <option value={`${discount}`}>{`%${discount}`}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row-data">
                <div>
                  <label className="label">Total Tuition</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Total Tuition"
                    value={dateOfBirth}
                    onChange={(e) => setTotalTuition(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="label">Paid Tuition</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Paid Tuition"
                    value={dateOfBirth}
                    onChange={(e) => setPaidTuition(e.target.value)}
                    required
                  />
                </div>
              </div>
            </dev>
            <div className="align-row-items mt-2 ">
              <Link className="link" to="#">
                <Button variant="contained" color="secondary" className="h5">
                  Register Student
                </Button>
              </Link>
              <Button
                className="h5 teal-bg"
                type="submit"
                variant="outlined"
                color="primary"
              >
                Next
              </Button>
            </div>
          </Card> */}
        </div>
      </FormGroup>
    </div>
  );
};

export default StudentRegistrationScreen;
