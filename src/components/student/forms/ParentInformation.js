import {
  TextField,
  Button,
  FormControl,
  Container,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Card,
  Input,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

function ParentInfoFormation() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Full Name:", fullName);
    console.log("Address:", address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" className="tx-dark m-4">
        Parent Information
      </Typography>
      <TextField
        label="Parent's phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Parent's email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Parent's full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <br />
      <TextField
        label="Parent's address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <br />
    </form>
  );
}

export default ParentInfoFormation;
