import React from "react";
import MainPage from "./Components/MainPage.js";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  mainContainer: {
    background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(24,168,189,1) 0%, rgba(197,224,231,1) 100%, rgba(1,193,243,1) 100%, rgba(0,212,255,1) 100%)`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "30%",
    minheight: "30%",
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },
});

const Assignment7new = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.paper} elevation={3}>
        <MainPage />
      </Paper>
    </div>
  );
};

export default Assignment7new;
