import React, { useContext, useState } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { ExpenseTrackerContent } from "../../Context/context";
import { v4 as uuidv4 } from "uuid";
import { expenseCategories, incomeCategories } from "../../Constants/constants";
import formatDate from "../../utils/formatDate";

const styles = makeStyles({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: "30px",
  },
});

const initialState = {
  amount: "",
  category: "",
  type: "income",
  date: formatDate(new Date()),
};

export const Form = () => {
  const classes = styles();
  const [formData, setFormData] = useState(initialState);
  const { AddTransaction } = useContext(ExpenseTrackerContent);

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    AddTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "income" ? incomeCategories : expenseCategories;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{"Type"}</InputLabel>
          <Select value={formData.type} onChange={HandleChange} name={"type"}>
            <MenuItem value="income">{"Income"}</MenuItem>
            <MenuItem value="expense">{"Expense"}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{"Category"}</InputLabel>
          <Select
            value={formData.category}
            onChange={HandleChange}
            name={"category"}
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
            <MenuItem value="business">{"Business"}</MenuItem>
            <MenuItem value="salary">{"Salary"}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          name={"amount"}
          onChange={HandleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          name={"date"}
          value={formData.date}
          onChange={(event) =>
            setFormData({ ...formData, date: formatDate(event.target.value) })
          }
        />
      </Grid>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        {"Create"}
      </Button>
    </Grid>
  );
};
