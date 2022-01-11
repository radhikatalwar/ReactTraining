import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2%",
    height: "80px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "900",
    color: "#686cbb",
  },
});

export const Heading = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.heading}>{"Resume Maker"}</Typography>
    </div>
  );
};
