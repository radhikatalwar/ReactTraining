import React, { useState } from "react";
import {
  Button,
  Fade,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const styles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    backgroundColor: "white",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "35%",
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: "#daf5f9",
  },
  input: {
    margin: "10px",
    width: "300px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    color: "#fff",
    backgroundColor: "#130444",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
});

const InitialValues = {
  transactions: [],
  income: [],
  expense: [],
};

export const ModalComponent = (props) => {
  const classes = styles();
  const [data, setData] = useState(InitialValues);
  console.log(data);

  const { transactions, income, expense } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem(
      "income",
      "[" + new Function("return " + JSON.stringify(income.trim()))() + "]"
    );

    localStorage.setItem(
      "expense",
      "[" + new Function("return " + JSON.stringify(expense.trim()))() + "]"
    );
    setData(InitialValues);
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Modal className={classes.modal} open={props.open} closeAfterTransition>
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5">{"Add Your Details"}</Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.input}
                required
                label="Your Transactions"
                variant="outlined"
                value={transactions}
                name="transactions"
                onChange={inputHandle}
              />
              <TextField
                className={classes.input}
                required
                name="income"
                onChange={inputHandle}
                label="Your Income for month"
                variant="outlined"
                value={income}
              />
              <TextField
                className={classes.input}
                required
                label="Your Expense for month"
                variant="outlined"
                name="expense"
                onChange={inputHandle}
                value={expense}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                onClick={props.handleModal}
              >
                {"Submit Details"}
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={props.handleModal}
              >
                {"Close"}
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
