import "./studentRegisteration.css";
import React, { useState } from "react";
import today from "../../uitls/today";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import { Button, FormGroup, Card } from "@material-ui/core";
import Spinner from "../../components/common/Spinner";
import "firebase/firestore";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerStudentCall } from "../../redux/api_Calls/studentsServices";
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

  const loading = useSelector((state) => state.students.loading);
  // const [english_name, setEnglishName] = useState("Islam Omar");
  // const [arabic_name, setArabicName] = useState("اسلام عمر");
  // const [date_of_birth, setDate_of_birth] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  console.log(loading);
  const [english_name, setEnglishName] = useState("Islam Omar");
  const [arabic_name, setArabicName] = useState("اسلام عمر");
  const [date_of_birth, setDate_of_birth] = useState("1990-01-01");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState(1234567890);
  const [email, setEmail] = useState("example@example.com");
  const [address, setAddress] = useState("123 Main Street");
  const [emergency_contact, setEmergencyContact] = useState(98764554433);
  const [grade, setGrade] = useState(1);
  const [section, setSection] = useState("International");
  const [note, setNote] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const parent_id = parseInt(location.pathname.split("/").pop());
  let todayDate = new Date(today).getUTCFullYear();
  let birthdayDate = new Date(date_of_birth).getUTCFullYear();

  const age = parseInt(todayDate) - parseInt(birthdayDate);
  const student = {
    english_name,
    arabic_name,
    date_of_birth,
    gender,
    phone,
    email,
    address,
    emergency_contact,
    grade,
    section,
    age,
    enrollment_date: today,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerStudentCall(student, dispatch, parent_id);
  };
  const discountsList = [];

  for (let i = 0; i <= 30; i++) {
    discountsList.push(i);
  }

  const gradesList = [];
  console.log(parent_id);
  console.log(location.pathname);
  for (let i = 1; i <= 12; i++) {
    gradesList.push(i);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="student-registeration pt-5">
          <h4 className="tx-dark m-4">Student's Registeration</h4>

          <FormGroup className={`  row col-12 form-container`}>
            <div className={`${classes.form} row col-6  `}>
              <Card className={`  row col-12 form-card p-3`}>
                <h4 className="tx-dark m-4">Basic Information</h4>
                <div className="input-container">
                  <label className="label">Arabic Name</label>
                  <input
                    className="input"
                    placeholder="Arabic Name"
                    value={arabic_name}
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
                    value={english_name}
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
                  <div className="birthday-container">
                    <label className="label">Date of Birth</label>
                    <input
                      className="input"
                      placeholder="Date of Birth"
                      value={date_of_birth}
                      onChange={(e) => setDate_of_birth(e.target.value)}
                      required
                      type="date"
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
                  <div></div>
                </div>{" "}
              </Card>
            </div>
            <div className={`${classes.form} row col-5  `}>
              <Card className={`${classes.form}  col-12 form-card mt-3`}>
                <dev className="form-data">
                  <h5 className="tx-dark mb-3">Contacts Information</h5>
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
                      <label htmlFor="emergency_contact" className="label">
                        Emergency Contact
                      </label>
                      <input
                        id="emergency_contact"
                        className="input"
                        placeholder="Emergency Contact"
                        value={emergency_contact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                        required
                      />
                    </div>{" "}
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        className="input"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </dev>
              </Card>
              <Card className={`  col-12 form-card p-3`}>
                <h5 variant="h5" className="tx-dark mb-3">
                  Academic Information
                </h5>

                <div className="row-data">
                  <div>
                    <label className="label">
                      Section
                      <small className="text-grey">
                        {" "}
                        nation / international
                      </small>
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

                      {gradesList.map((grade) => (
                        <option
                          key={grade}
                          value={`${grade}`}
                        >{`Grade: ${grade}`}</option>
                      ))}
                    </select>
                  </div>{" "}
                </div>
                <div className="align-row-items mt-2 ">
                  <Link className="link" to="#">
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      color="secondary"
                      className="h5"
                    >
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
                    value={date_of_birth}
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
                    value={date_of_birth}
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
      )}
    </>
  );
};

export default StudentRegistrationScreen;
