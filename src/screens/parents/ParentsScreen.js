import { Card, CardContent, Typography, Button } from "@material-ui/core";
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
import Search from "@mui/icons-material/Search";
import CustomSearch from "../../components/common/CustomSearch";
import FirstParentCard from "../../components/parents/FirstParentCard";

const ParentsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [firstParent, setFirstParent] = useState(null);

  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);
  const [parentList, setParentList] = useState([]);

  useEffect(() => {
    fetchParents();
  }, []);

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
              <h4 className="tx-dark text-center">Parents</h4>
              <div id="search">
                <SearchIcon className="icon" />
                <input placeholder="search by name or ID..." type="search" />
              </div>
            </div>{" "}
            <table component={Paper} className="table" aria-label="Parent List">
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
