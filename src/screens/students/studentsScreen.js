import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { axiosInstance } from "../../config/axiosInstance";
import Spinner from "../../components/common/Spinner";
import { Link } from "react-router-dom";
import { RemoveRedEye } from "@material-ui/icons";
import FirstStudentCard from "../../components/student/firstStudentCard";
import { useDispatch, useSelector } from "react-redux";
import { FetchStudents } from "../../redux/api_Calls/studentsServices";
const StudentssScreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const students = useSelector((state) => state.students.allStudents);
  // const parentList = useSelector((state) => state.students.);
  const [firstStudent, setFirstStudent] = useState(null);
  const [searching, setSearching] = useState(0);
  const [serchValue, setSearchValue] = useState(0);
  useEffect(() => {
    FetchStudents(dispatch);
  }, []);
  console.log(firstStudent);
  const handleSearch = (e) => {
    if (e.target.value != "") {
      setSearching(true);
    } else {
      setSearching(false);
    }
    console.log(e.target.value);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" parents row">
          <div className="left">
            <div className="my-3 parents-list-header">
              <h2 className="text-grey text-center tx-dark">Students</h2>
              <div id="search">
                <SearchIcon className="icon" />
                <input
                  onChange={handleSearch}
                  placeholder="Search Students by name or ID..."
                  type="search"
                />
              </div>
            </div>{" "}
            <>
              {searching ? (
                <div className="search-result">
                  <h4 className="tx-dark text-center">search resoluts</h4>
                </div>
              ) : (
                <table
                  component={Paper}
                  className="table"
                  aria-label="Parent List"
                >
                  <thead className="table-header">
                    <TableRow>
                      <TableCell>Arabic Name</TableCell>
                      <TableCell>English Name</TableCell>
                      <TableCell>Phone</TableCell>

                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </thead>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id} className="parent">
                        {/* <TableCell>{student.parent_id}</TableCell> */}
                        <TableCell>{student.arabic_name}</TableCell>
                        <TableCell>{student.english_name}</TableCell>
                        <TableCell>{student.phone}</TableCell>

                        <TableCell className="actions">
                          {/* <Link to={`/student/${student.id}`}> */}
                          <IconButton onClick={() => setFirstStudent(student)}>
                            <RemoveRedEye className="action-btn details" />
                          </IconButton>
                          {/* </Link> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </table>
              )}
            </>
          </div>
          <FirstStudentCard firstStudent={students[0]} />
        </div>
      )}
    </>
  );
};

export default StudentssScreen;
