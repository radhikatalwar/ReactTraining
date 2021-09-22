import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    margin: "0 50px 20px",
    justifyContent: "center",
  },
  heading: {
    fontSize: "21px",
    letterSpacing: "1px",
    fontWeight: "700",
    marginBottom: "15px",
  },
  copyright: {
    textAlign: "center",
    fontSize: "16px",
    color: "white",
  },
});

export const FooterComp = ({ label, line1, line2 }) => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.heading}>{label}</Typography>
      <Typography className={classes.copyright}>{line1}</Typography>
      <Typography className={classes.copyright}>{line2}</Typography>
    </div>
  );
};
