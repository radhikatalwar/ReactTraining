import React, { useContext, useState } from "react";
import {
  Modal,
  TextField,
  Typography,
  Grid,
  Fade,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { ExpenseTrackerContent } from "../../../Context/context";
import { v4 as uuidv4 } from "uuid";
import {
  expenseCategories,
  incomeCategories,
} from "../../../Constants/constants";
import formatDate from "../../../utils/formatDate";

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

export const InputModalComponent = (props) => {
  const classes = styles();

  const initialState = {
    amount: "",
    category: "",
    type: props.type,
    date: formatDate(new Date()),
  };

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
      type: props.type,
    };
    AddTransaction(transaction);
    setFormData(initialState);
    props.handleModal();
  };

  const selectedCategories =
    props.type === "income" ? incomeCategories : expenseCategories;

  return (
    <>
      <Modal className={classes.modal} open={props.open} closeAfterTransition>
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Typography variant="h5">{`Add Your ${props.type}`}</Typography>
            <Grid container spacing={2}>
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
                    setFormData({
                      ...formData,
                      date: formatDate(event.target.value),
                    })
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
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                onClick={props.handleModal}
              >
                {"Close"}
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
