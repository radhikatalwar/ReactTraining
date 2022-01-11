import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const styles = makeStyles({
  paper: {
    padding: "20px",
    width: "50%",
    margin: "30px auto",
    textAlign: "center",
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#275d7f",
    color: "white",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#275d7f",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#275d7f",
    textAlign: "center",
    fontSize: "32px",
    margin: "13px",
  },
});

export const Done = () => {
  const classes = styles();
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <Typography variant="h6" className={classes.title}>
          {`Thanks for Signing up`}
        </Typography>
        <Button
          onClick={goToHome}
          variant="contained"
          className={classes.button}
        >
          {"Another Sign up"}
        </Button>
      </div>
    </Paper>
  );
};
