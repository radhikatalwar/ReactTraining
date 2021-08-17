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
    backgroundColor: "#b03938",
    color: "white",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      color: "#b03938",
      backgroundColor: "white",
    },
  },
  title: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "#b03938",
    textAlign: "center",
    fontSize: "32px",
    margin: "13px",
  },
});

export const Done = () => {
  const classes = styles();
  const history = useHistory();

  const goToHome = () => {
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    history.push("/");
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <div>
        <Typography variant="h5" className={classes.title}>
          {`Hello! ${localStorage.getItem("name")}`}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {`Your Email Id ${localStorage.getItem("email")}`}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {`Thanks for your Details`}
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
