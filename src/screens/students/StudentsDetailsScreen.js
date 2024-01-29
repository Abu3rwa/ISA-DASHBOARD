import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./studentsDetailsScreen.css";
import db from "../../firebase";
import {
  CircularProgress,
  List,
  ListItemText,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import {
  ChildCare,
  ChildFriendly,
  Email,
  GetAppRounded,
  Grade,
  Language,
  LeakRemoveOutlined,
  Person,
  Phone,
  Translate,
  ViewAgendaOutlined,
} from "@material-ui/icons";
import { doc, getDoc } from "firebase/firestore";
import { Abc } from "@mui/icons-material";
import Academics from "../../components/student/academics";

const StudentsDetailsScreen = () => {
  const location = useLocation();
  const studentId = location.pathname.split("/").pop();
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(studentId);
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "students", studentId.trim());
        const data = await getDoc(docRef);
        setStudent({
          id: doc.id,
          ...data.data(),
        });
        console.log(student);
        setLoading(false);
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

  return (
    <>
      {loading ? (
        <div className="loading-parent">
          <CircularProgress color="primary" size={60} />
          <Typography variant="h5" className="text-center text-dark m-2">
            Loading... Please wait
          </Typography>
        </div>
      ) : (
        <div className="students-details row">
          <div className="basic-information col-4 ">
            <img className="st-img" src={student.image} />
            <h3 className="text-start m-3 text-dark">Students Information</h3>
            <List>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>ع</Avatar>
                </ListItemAvatar>
                <ListItemText>Arabic Name:</ListItemText>
                <ListItemText className=" field">
                  {" "}
                  {student.arabicName}
                </ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>En</Avatar>
                </ListItemAvatar>
                <ListItemText>English Name:</ListItemText>
                <ListItemText className=" field">
                  {" "}
                  {student.englishName}
                </ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>
                    <Email />
                  </Avatar>
                </ListItemAvatar>
                Email:
                <ListItemText className=" field"> {student.email}</ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>
                    <Phone />
                  </Avatar>
                </ListItemAvatar>
                Phone:
                <ListItemText className=" field"> {student.email}</ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>
                    <Grade />
                  </Avatar>
                </ListItemAvatar>
                Grade:
                <ListItemText className=" field"> {student.grade}</ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>
                    <ViewAgendaOutlined />
                  </Avatar>
                </ListItemAvatar>
                Age:
                <ListItemText className=" field"> {student.age}</ListItemText>
              </ListItem>
              <ListItem className=" ">
                <ListItemAvatar>
                  <Avatar>
                    <GetAppRounded />
                  </Avatar>
                </ListItemAvatar>
                Gender:
                <ListItemText className=" field">
                  {" "}
                  {student.gender}
                </ListItemText>
              </ListItem>
            </List>
          </div>
          <div className="other-information col-8">
            <Academics />
          </div>
        </div>
      )}
    </>
  );
};

export default StudentsDetailsScreen;
