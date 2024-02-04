import { CircularProgress } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import "./parentsScreen.css";
import {
  TableBody,
  TableCell,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@material-ui/core";
import { axiosInstance } from "../../config/axiosInstance";
import Spinner from "../../components/common/Spinner";
import { Link } from "react-router-dom";
import {
  Delete,
  Details,
  Edit,
  EditRounded,
  More,
  Payment,
  RemoveRedEye,
  RemoveRedEyeOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchParentDataStart,
  fetchParentDataSuccess,
  fetchParentDataFailure,
} from "../../redux/parentSlice";
import FirstParentCard from "../../components/parents/FirstParentCard";

const ParentsScreen = () => {
  const dispatch = useDispatch();
  const parentList = useSelector((state) => state.parents.parentData);
  // const loading = useSelector((state) => state.parent.loading);
  // const error = useSelector((state) => state.parents.error);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [firstParent, setFirstParent] = useState(null);

  // const [parentList, setParentList] = useState([]);
  const [searchValue, setSearchValue] = useState(0);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    dispatch(fetchParentDataStart());

    try {
      const response = await axiosInstance.get("/parents/gt-all");
      dispatch(fetchParentDataSuccess(response.data));
      // setParentList(response.data);

      setFirstParent(response.data[0]);
    } catch (error) {
      dispatch(fetchParentDataFailure(error.message));

      console.error("Error fetching parent list:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    console.log(searchValue.length);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" parents row" onClick={() => setSearchValue("")}>
          <div className="left">
            <div className="my-3 parents-list-header">
              <h4 className="tx-dark text-center">Parents</h4>
              <div id="search">
                <SearchIcon className="icon" />
                <input
                  onChange={handleSearch}
                  placeholder="search by name or ID..."
                  type="search"
                />
              </div>
            </div>{" "}
            <>
              {searching ? (
                <div className="search-result">
                  <h4 className="tx-dark text-center">search resoluts</h4>

                  <div>
                    <CircularProgress color="primary" size={60} />
                  </div>
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
                          <Link to="#">
                            {/* <Link to={`/parent/${parent.parent_id}`}> */}
                            <IconButton onClick={() => setFirstParent(parent)}>
                              <RemoveRedEye className="action-btn details" />
                            </IconButton>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </table>
              )}{" "}
            </>
          </div>
          <FirstParentCard firstParent={firstParent} />
        </div>
      )}
    </>
  );
};

export default ParentsScreen;
