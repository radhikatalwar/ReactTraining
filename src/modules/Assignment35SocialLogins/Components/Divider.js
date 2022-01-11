import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  or: {
    color: "#275d7f",
    fontSize: "16px",
    margin: "13px",
  },
  option: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "240px",
    backgroundColor: "#275d7f",
  },
});

export const Seperator = () => {
  const classes = styles();

  return (
    <div className={classes.option}>
      <Divider className={classes.divider} />
      <Typography className={classes.or}>{"OR"}</Typography>
      <Divider className={classes.divider} />
    </div>
  );
};
