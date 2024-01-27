import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
import { CurrencyBitcoin } from "@mui/icons-material";
import React, { useState } from "react";

function StudentRegistrationfinantialInformation() {
  const [totalFees, setTotalFees] = useState("");
  const [remaining, setRemaining] = useState("");
  const [dateToPayRemaining, setdateToPayRemaining] = useState("");
  const [dateOfPaying, setDateOfPaying] = useState("");
  const [note, setNote] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [discount, setDiscount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const discountsList = [];

  for (let i = 1; i <= 30; i++) {
    discountsList.push(i);
  }

  return (
    <dev onSubmit={handleSubmit} className="form-data">
      <Typography variant="h4" className="tx-dark m-4">
        Finantial Information
      </Typography>

      <div className="row-data">
        <FormControl variant="outlined" fullWidth margin="normal" required>
          <InputLabel>Currency</InputLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            startIcon={<CurrencyBitcoin />}
            label="Curency"
          >
            <MenuItem value="male">US Dollar</MenuItem>
            <MenuItem value="female">Lybian Dinar</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth margin="normal" required>
          <InputLabel>Currency</InputLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            startIcon={<CurrencyBitcoin />}
            label="Curency"
          >
            {discountsList.map((discount) => (
              <MenuItem value={`${discount}`}>{`%${discount}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TextareaAutosize
        className="textarea"
        placeholder="Please write any notes here."
        label="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        fullWidth
        required
      />
    </dev>
  );
}

export default StudentRegistrationfinantialInformation;
