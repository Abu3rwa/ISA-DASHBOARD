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
const StudentssScreen = () => {
  const [loading, setLoading] = useState(false);
  const [firstParent, setFirstParent] = useState(null);

  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);
  const [parentList, setParentList] = useState([]);
  const [searching, setSearching] = useState(0);
  const [serchValue, setSearchValue] = useState(0);

  useEffect(() => {
    fetchParents();
  }, []);
  const handleSearch = (e) => {
    if (e.target.value != "") {
      setSearching(true);
    } else {
      setSearching(false);
    }
    console.log(e.target.value);
  };
  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/parents/gt-all");
      setParentList(response.data);
      setFirstParent(response.data[0]);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching parent list:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" parents row">
          <div className="left">
            <div className="my-3 parents-list-header">
              <h4 className="text-grey text-center">Students</h4>
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
                      <TableCell>No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Phone</TableCell>

                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </thead>
                  <TableBody>
                    {parentList.map((parent) => (
                      <TableRow key={parent.parent_id} className="parent">
                        <TableCell>{parent.parent_id}</TableCell>
                        <TableCell>{parent.name}</TableCell>
                        <TableCell>{parent.phone}</TableCell>

                        <TableCell className="actions">
                          <Link to={`/parent/${parent.parent_id}`}>
                            <IconButton>
                              <RemoveRedEye className="action-btn details" />
                            </IconButton>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </table>
              )}
            </>
          </div>
          <FirstStudentCard firstParent={firstParent} />
        </div>
      )}
    </>
  );
};

export default StudentssScreen;
