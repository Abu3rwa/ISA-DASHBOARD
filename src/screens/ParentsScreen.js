import React, { useState, useEffect } from "react";
import "./parentsScreen.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { axiosInstance } from "../config/axiosInstance";
import Spinner from "../components/common/Spinner";
import { Link } from "react-router-dom";
import {
  Delete,
  Edit,
  EditRounded,
  RemoveRedEye,
  RemoveRedEyeOutlined,
} from "@material-ui/icons";

const ParentsScreen = () => {
  const [loading, setLoading] = useState(false);

  const [parentList, setParentList] = useState([]);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/parents/gt-all");
      setParentList(response.data);
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
        <div className=" parents">
          <Typography variant="h4" className="tx-dark text-center">
            Parents
          </Typography>
          <TableContainer component={Paper} className="">
            <Table className="table" aria-label="Parent List">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parentList.map((parent) => (
                  <TableRow key={parent.parent_id} className="parent">
                    <TableCell>{parent.parent_id}</TableCell>
                    <TableCell>{parent.name}</TableCell>
                    <TableCell>{parent.email}</TableCell>
                    <TableCell>{parent.phone}</TableCell>
                    <TableCell>{parent.address}</TableCell>
                    <TableCell>{parent.gender}</TableCell>
                    <TableCell className="actions">
                      <Link to={`/parent/${parent.parent_id}`}>
                        <IconButton>
                          <RemoveRedEyeOutlined className="action-btn details" />
                        </IconButton>
                      </Link>
                      <IconButton>
                        <EditRounded className="action-btn edit" />
                      </IconButton>
                      <IconButton>
                        <Delete className="action-btn delete" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default ParentsScreen;
