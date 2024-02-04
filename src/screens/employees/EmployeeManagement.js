import { Button, CircularProgress } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";

import "./employeeManagement.css";
import Details from "@material-ui/icons/Details";
import { Report } from "@material-ui/icons";

const EmployeeManagement = () => {
  // Sample data for the chart
  const handleSearch = () => {};
  return (
    <div className="employee-management">
      <div className="my-3 parents-list-header">
        <h4 className="tx-dark text-center">Employee</h4>
        <div id="search">
          <SearchIcon className="icon" />
          <input
            onChange={handleSearch}
            placeholder="search by name or ID..."
            type="search"
          />
        </div>
      </div>{" "}
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Manager</td>
            <td>123-456-7890</td>
            <td>
              <i className="fas fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Developer</td>
            <td>987-654-3210</td>
            <td className="row-data">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                endIcon={<Details />}
              >
                Details
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                endIcon={<Report />}
              >
                Report
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
