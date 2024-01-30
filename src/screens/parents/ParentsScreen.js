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

  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);
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
              )}{" "}
            </>
          </div>
          <FirstParentCard firstParent={firstParent} />
          {/* <Card className=" right">
            <CardContent>
              <div className="actions row-data">
                <Button variant="outlined" color="primary" endIcon={<More />}>
                  More
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<EditRounded />}
                >
                  Edit{" "}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<Delete />}
                >
                  Delete
                </Button>
              </div>
              <h4 className="teal m-3">Parent Details</h4>
              <h6 className="tx-dark m-3" color="textSecondary">
                Name: <span className="teal">{firstParent?.name}</span>
              </h6>
              <h6 className="tx-dark m-3" color="textSecondary">
                Email: <span className="teal">{firstParent?.email}</span>
              </h6>
              <h6 className="tx-dark m-3" color="textSecondary">
                Phone: <span className="teal">{firstParent?.phone}</span>
              </h6>
              <h6 className="tx-dark m-3" color="textSecondary">
                <span className="teal">{firstParent?.address}</span>
              </h6>
              <h6 className="tx-dark m-3" color="textSecondary">
                Gender: <span className="teal">{firstParent?.gender}</span>
              </h6>

              <Card className="m-2 p-2">
                <h4 className="teal m-3">Tuitions</h4>

                <h6 className="tx-dark m-3" color="textSecondary">
                  Remaining Tuition:{" "}
                  <span className="teal">
                    {paidAndRemainingTuition?.remaining_tuition}
                  </span>
                </h6>
                <h6 className="tx-dark m-3" color="textSecondary">
                  Paid Tuition:{" "}
                  <span className="red">
                    {paidAndRemainingTuition?.remaining_tuition}
                  </span>
                </h6>
                <div className="actions row-data">
                  <Button
                    endIcon={<Details />}
                    variant="contained"
                    color="primary"
                  >
                    Details
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<Payment />}
                  >
                    Pay
                  </Button>
                </div>
              </Card>
            </CardContent>
          </Card> */}
        </div>
      )}
    </>
  );
};

export default ParentsScreen;
