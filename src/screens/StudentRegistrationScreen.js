import React, { useState } from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import app from "../firebase";
import "firebase/firestore";

const StudentRegistrationScreen = () => {
  const [student, setStudent] = useState({
    studentId: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    address: "",
    emergencyContact: "",
    enrollmentDate: "",
    grade: "",
    section: "",
    attendance: [],
    academicPerformance: [],
    behaviorRecords: [],
    medicalInformation: "",
    parentInformation: "",
    notes: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a Firestore reference

    // Add student to Firestore
    app
      .collection("students")
      .add(student)
      .then(() => {
        console.log("Student added successfully!");
        setStudent({
          studentId: "",
          name: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: "",
          email: "",
          address: "",
          emergencyContact: "",
          enrollmentDate: "",
          grade: "",
          section: "",
          attendance: [],
          academicPerformance: [],
          behaviorRecords: [],
          medicalInformation: "",
          parentInformation: "",
          notes: "",
        });
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Student ID"
              name="studentId"
              value={student.studentId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={student.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
            />
          </Grid>
          {/* Add more TextField components for p student fields */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success">
              Register Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default StudentRegistrationScreen;
