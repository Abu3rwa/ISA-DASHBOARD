import "./studentsList.css";
import {
  TableBody,
  Paper,
  Typography,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import firebase from "firebase/firebase-app";
import db from "../firebase";
import { DataGrid } from "@mui/x-data-grid";
import {
  Delete,
  Details,
  DetailsTwoTone,
  EditRounded,
  More,
  RemoveRedEye,
  RemoveRedEyeOutlined,
} from "@material-ui/icons";
import Spinner from "./common/Spinner";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const querySnapchot = await getDocs(collection(db, "students"));
        querySnapchot.forEach((doc) => {
          const document = doc.data();
          const data = [];
          data.push({
            id: doc.id,
            ...document,
          });
          console.log(students);
          setStudents(data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();

    // Clean up the Firebase instance
    // return () => {
    //   firebase.app().delete();
    // };
  }, []);
  const handleSelectionModelChange = (selection) => {
    console.log("Selected rows:", selection);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="students" style={{ height: "90%", width: "100%" }}>
          {/* <Typography variant="h5" className="text-center text-dark">
        Students
      </Typography> */}
          <table>
            <thead>
              <tr className="head">
                <th className="t-c t-head">Arabic Name</th>
                <th className="t-c t-head">English Name</th>
                <th className="t-c t-head">Email</th>
                <th className="t-c t-head">Grade</th>
                <th className="t-c t-head">Age</th>
                <th className="t-c t-head">Gender</th>
                <th className="t-c t-head">Actions</th>
              </tr>
            </thead>
            <TableBody>
              {students.map((student) => (
                <tr key={student.id}>
                  <th className="t-c">{student.arabicName}</th>
                  <th className="t-c">{student.englishName}</th>
                  <th className="t-c">{student.email}</th>
                  <th className="t-c">{student.grade}</th>
                  <th className="t-c">{student.age}</th>
                  <th className="t-c">{student.gender}</th>
                  <th className="t-c actions">
                    {" "}
                    <IconButton>
                      <Delete className="action-btn delete" />
                    </IconButton>
                    <Link to={`/students/${student.id}`}>
                      <IconButton>
                        <RemoveRedEyeOutlined className="action-btn details" />
                      </IconButton>
                    </Link>
                    <IconButton>
                      <EditRounded className="action-btn edit" />
                    </IconButton>
                  </th>
                </tr>
              ))}
            </TableBody>
          </table>
        </div>
      )}
    </>
  );
};

export default StudentList;
