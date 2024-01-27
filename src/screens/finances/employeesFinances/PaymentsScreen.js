import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentsScreen = () => {
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform further actions with the form data
    console.log("Name:", name);
    console.log("Currency:", currency);
    console.log("Description:", description);
    console.log("Amount:", amount);

    // Reset the form
    setName("");
    setCurrency("");
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <FormControl fullWidth>
          <InputLabel>Name</InputLabel>
          <Select value={name} onChange={handleNameChange}>
            <MenuItem value="Mr. Abdulhafeez">Mr. Abdulhafeez</MenuItem>
            <MenuItem value="Ahmed">Ahmed</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="form-group">
        <FormControl fullWidth>
          <InputLabel>Currency</InputLabel>
          <Select value={currency} onChange={handleCurrencyChange}>
            <MenuItem value="USD">US Dollars</MenuItem>
            <MenuItem value="LD">LD</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="form-group">
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="form-group">
        <TextField
          label="Amount"
          fullWidth
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default PaymentsScreen;
