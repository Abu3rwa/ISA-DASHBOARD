import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import "./userManagementScreen.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  PersonAdd,
  PersonAddDisabled,
  SupervisorAccount,
  AccountCircle,
} from "@material-ui/icons";

const UserManagementScreen = () => {
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", isAdmin: true, role: "Admin" },
    {
      id: 2,
      name: "Jane Smith",
      isAdmin: false,
      role: "Attendance Supervisor",
    },
    { id: 3, name: "John Doe", isAdmin: true, role: "Exams Supervisor" },
    { id: 4, name: "Mohammed", isAdmin: false, role: "User" },
    { id: 5, name: "Mohammed", isAdmin: false, role: "User" },
    // Add more users as needed
  ]);

  const handleToggleAdmin = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, isAdmin: !user.isAdmin };
        }
        return user;
      });
    });
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRoleChange = (userId, newRole) => {
    setRole(newRole);
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, role: newRole };
        }
        return user;
      });
    });
  };

  return (
    <div className="user-settings   ">
      <Link className="link" to="register">
        <Button className="add-user-btn">Add User</Button>{" "}
      </Link>
      <h2 className="tx-dark text-center m-3">Users Management</h2>
      <TableContainer component={Paper}>
        <Table className="users-table" aria-label="User Management Table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Admin</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">
                  {user.isAdmin ? (
                    <SupervisorAccount color="primary" />
                  ) : (
                    <AccountCircle />
                  )}
                </TableCell>
                <TableCell align="center" className="row-data actions">
                  <IconButton onClick={() => handleToggleAdmin(user.id)}>
                    {user.isAdmin ? (
                      <PersonAddDisabled color="secondary" />
                    ) : (
                      <PersonAdd color="primary" />
                    )}
                  </IconButton>
                  {/* <Button
                    onClick={() => handleRoleChange(user.id, "Manager")}
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<SupervisorAccount />}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleRoleChange(user.id, "User")}
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<SupervisorAccount />}
                  >
                    Dismiss Admin
                  </Button>{" "} */}
                  <FormControl className="form">
                    <InputLabel id="dropdown-label">Select Role</InputLabel>
                    <Select
                      labelId="dropdown-label"
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      <MenuItem value="finances">Finances</MenuItem>
                      <MenuItem value="attendanceSupervisor">
                        Attendance Supervisor
                      </MenuItem>
                      <MenuItem value="examsSupervisor">
                        Exams Supervisor
                      </MenuItem>
                      <MenuItem value="ceo">CEO</MenuItem>
                      <MenuItem value="transportationSupervisor">
                        Transportation Supervisor
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserManagementScreen;
