import React from "react";
import { makeStyles, Paper, TextField } from "@material-ui/core";
import { Button, Fade, Modal, Typography } from "@material-ui/core";

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
  input: {
    margin: "10px",
    width: "300px",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#20919d",
    color: "white",
    fontSize: "14px",
    margin: "10px 0 0",
    "&:hover": {
      color: "#20919d",
      backgroundColor: "white",
    },
  },
});

export const TakeInput = ({
  open,
  HandleInput,
  HandleModal,
  inputValues,
  HandleInputSubmit,
}) => {
  const classes = styles();

  return (
    <Modal className={classes.modal} open={open} closeAfterTransition>
      <Fade in={open}>
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="h5">{"Enter the Details"}</Typography>
          <form onSubmit={HandleInputSubmit} className={classes.form}>
            <TextField
              className={classes.input}
              required
              label="Email"
              value={inputValues.email}
              name="email"
              onChange={HandleInput}
            />
            <TextField
              className={classes.input}
              required
              label="Invoice No"
              value={inputValues.invoiceNo}
              name="invoiceNo"
              onChange={HandleInput}
            />
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              {"Get Invoice"}
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={HandleModal}
            >
              {"Close"}
            </Button>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
};
