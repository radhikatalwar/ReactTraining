import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainHeading: {
    fontSize: "37px",
    letterSpacing: "4px",
    fontWeight: 900,
  },
  subHeading: {
    fontSize: "19px",
    letterSpacing: "2px",
  },
});

export const Head = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.mainHeading}>{"Your Gallery"}</Typography>
      <Typography className={classes.subHeading}>
        {"Add More Pictures"}
      </Typography>
    </div>
  );
};
