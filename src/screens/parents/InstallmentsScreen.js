import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowBack, Delete, Edit, Print } from "@material-ui/icons";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import "./installmentsScreen.css";
import Spinner from "../../components/common/Spinner";
import { axiosInstance } from "../../config/axiosInstance";

const InstallmentsScreen = () => {
  const [searching, setSearching] = useState(false);
  const [firstParent, setFirstParent] = useState(null);

  const [paidAndRemainingTuition, setPaidAndRemainingTuition] = useState([]);
  // const [parentList, setParentList] = useState([]);
  const [searchValue, setSearchValue] = useState(0);
  const location = useLocation();
  const parentId = location.pathname.split("/").pop();
  const [installments, setInstallments] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchParents();
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };
  const fetchParents = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/installments");
      setInstallments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching parent list:", error);
    }
  };
  const lastInstallment = installments.pop();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="installments-container pt-5 row mx-3">
          <div className="row-data my-4 row">
            {" "}
            <Button
              className="col-2 "
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBack />}
              component={Link}
              to="/"
            >
              back to homepage
            </Button>
            <div className="col-7 totals-container">
              <div className="totals col-11">
                <div id="search">
                  {/* <SearchIcon className="icon" /> */}
                  <input
                    onChange={handleSearch}
                    placeholder="search by name or ID..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <h1 className="col-2 teal">Installment</h1>
          </div>

          <table
            component={Paper}
            className="table col-12 col-md-8"
            aria-label="Parent List"
          >
            <thead className="table-header">
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Parent Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>discount</TableCell>
                <TableCell>Date</TableCell>

                <TableCell>Actions</TableCell>
              </TableRow>
            </thead>
            <TableBody>
              {installments.map((parent) => (
                <TableRow key={parent.parent_id} className="parent">
                  <TableCell>{parent.installment}</TableCell>
                  <TableCell>{parent.parent_name}</TableCell>
                  <TableCell>{parent.installment_amount}</TableCell>
                  <TableCell>{parent.discount}</TableCell>
                  <TableCell>{parent.date}</TableCell>

                  <p className="  row-data actions">
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      startIcon={<Delete />}
                      component={Link}
                      to="#"
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<Print />}
                    >
                      Print
                    </Button>
                    <Link to={`/parent/${parent.parent_id}`}>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        startIcon={<Edit />}
                        component={Link}
                        to="#"
                      >
                        Edit
                      </Button>
                    </Link>{" "}
                  </p>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </div>
      )}
    </>
  );
};

export default InstallmentsScreen;
