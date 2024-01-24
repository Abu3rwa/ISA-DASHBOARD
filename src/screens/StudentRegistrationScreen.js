import "./studentRegisteration.css";
import React, { useState } from "react";
import {
  input,
  Button,
  FormControl,
  Container,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Card,
  Typography,
} from "@material-ui/core";
import app from "../firebase";
import "firebase/firestore";
import {
  AccountCircle,
  DateRange,
  Email,
  Home,
  PersonAdd,
  Phone,
  School,
} from "@material-ui/icons";
import ParentInfoFormation from "../components/student/forms/ParentInformation";
import StudentRegistrationfinantialInformation from "../components/student/forms/StudentRegistrationfinantialInformation";

const StudentRegistrationScreen = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [academicPerformance, setAcademicPerformance] = useState([]);
  const [behaviorRecords, setBehaviorRecords] = useState([]);
  const [medicalInformation, setMedicalInformation] = useState("");
  const [parentInformation, setParentInformation] = useState("");
  const [notes, setNotes] = useState("");
  const student = {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const ageList = [];

  for (let i = 6; i <= 18; i++) {
    ageList.push(i);
  }
  return (
    <div className="student-registeration">
      <Typography variant="h4" className="tx-dark m-4">
        Student's Registeration
      </Typography>

      <FormGroup onSubmit={handleSubmit} className="row col-12 form-container">
        <Card className="col-6 form-card">
          <Typography variant="h4" className="tx-dark m-4">
            Parent Information
          </Typography>
          <div className="input-container">
            <label htmlFor="studentId" className="label">
              Student ID
            </label>
            <input
              id="studentId"
              className="input"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              id="name"
              className="input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="row-data">
            <div>
              <label htmlFor="dateOfBirth" className="label">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                className="input"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="label">
                Gender
              </label>
              <select
                id="gender"
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
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                className="input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row-data">
            <div>
              <label htmlFor="gender" className="label">
                Section
              </label>
              <select
                id="gender"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Section
                </option>
                <option value="nation">National</option>
                <option value="internation">Internation</option>
              </select>
            </div>
            <div>
              <label htmlFor="gender" className="label">
                Section
              </label>
              <select
                id="gender"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Section
                </option>

                {ageList.map((years) => (
                  <option value={`${years}`}>{`${years} years`}</option>
                ))}
              </select>
            </div>
          </div>

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
          </div>

          <div className="input-container">
            <label htmlFor="enrollmentDate" className="label">
              Enrollment Date
            </label>
            <input
              id="enrollmentDate"
              className="input"
              placeholder="Enrollment Date"
              value={enrollmentDate}
              onChange={(e) => setEnrollmentDate(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="grade" className="label">
              Grade
            </label>
            <input
              id="grade"
              className="input"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>

          {/* Add more fieldsas needed */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Card>
        <Card className="col-5 form-card">
          <ParentInfoFormation />
          <StudentRegistrationfinantialInformation />
        </Card>
      </FormGroup>
    </div>
  );
};

export default StudentRegistrationScreen;
