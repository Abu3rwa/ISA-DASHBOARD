import React, { useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";
import "./createTimetableScreen.css";
import gradesList from "../../../uitls/gradesList";
import { Button } from "@material-ui/core";
const CreateTimeTabeScreen = () => {
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [teacher, setTeacher] = useState("");
  const [grade, setGrade] = useState(1);
  const [section, setSection] = useState("International");
  // const [day, setDay] = useState("Monday");
  // const [subject, setSubject] = useState("Mathematics");
  // const [startTime, setStartTime] = useState("09:00 AM");
  // const [endTime, setEndTime] = useState("10:30 AM");
  // const [teacher, setTeacher] = useState("John Doe");
  // const [grade, setGrade] = useState(1);
  // const [section, setSection] = useState("International");
  const startDateTime = new Date(startTime);
  const endDateTime = new Date(endTime);

  const start_time = startDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const end_time = endDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const timetable = {
    teacher,
    start_time,
    end_time,
    section,
    grade,
    subject,
    day,
  };
  console.log(timetable);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/timetables", timetable);

      setDay("");
      setSubject("");
      setGrade("");
      setStartTime("");
      setEndTime("");
      setTeacher("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="timetable">
      <h2 className="tx-dark">Add Timetable</h2>
      <form onSubmit={handleFormSubmit}>
        {" "}
        <div className="row-data">
          <label className="label mx-3">Start time</label>
          <input
            className="input"
            placeholder="Start time"
            onChange={(e) => setStartTime(e.target.value)}
            required
            type="datetime-local"
          />
        </div>{" "}
        <div className="row-data">
          <label className="label mx-3">End time</label>
          <input
            className="input"
            placeholder="End time"
            onChange={(e) => setEndTime(e.target.value)}
            required
            type="datetime-local"
          />
        </div>{" "}
        <div className="row-data">
          <div className="time-container">
            <label className="label">Teacher</label>
            <select
              className="input"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Teacher
              </option>
              <option value="Abdulhafezz">Abdulhafezz</option>
              <option value="Ahmed">AhmedAhmed</option>
            </select>
          </div>
          <div className="time-container">
            <label className="label">Section</label>
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
          <div className="time-container">
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
        <div className="row-data">
          <div className="time-container">
            <label className="label">Day</label>
            <select
              className="input"
              value={grade}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Day
              </option>

              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => (
                <option key={day} value={`${day}`}>
                  {day}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className="time-container">
            <label className="label">Subject</label>
            <select
              className="input"
              value={grade}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Subject
              </option>

              {[
                "Mathematics",
                "English Language",
                "Science",
                "History",
                "Geography",
                "Computer Science",
                "Art",
                "Physical Education",
              ].map((subject) => (
                <option key={subject} value={`${subject}`}>
                  {subject}
                </option>
              ))}
            </select>
          </div>{" "}
        </div>{" "}
        <div className="row-data">
          <Button color="secondary" variant="contained">
            cancel
          </Button>{" "}
          <Button color="primary mt-2" variant="outlined" type="submit">
            Add Timetable
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTimeTabeScreen;
