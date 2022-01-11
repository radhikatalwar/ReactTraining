import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Dashboard } from "./Dashboard";

const styles = makeStyles({
  mainRight: {
    margin: "25px 23px",
  },
  heading: {
    fontWeight: "600",
    color: "#495057",
  },
});

export const Right = () => {
  const classes = styles();

  return (
    <div className={classes.mainRight}>
      <Typography className={classes.heading}>{"DASHBOARD"}</Typography>
      <Dashboard />
    </div>
  );
};
