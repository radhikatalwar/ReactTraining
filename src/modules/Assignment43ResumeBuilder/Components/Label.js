import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const styles = makeStyles({
  label: {
    margin: "20px 0",
    fontSize: "24px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },
});

export const LabelComp = ({ label }) => {
  const classes = styles();

  const { color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <Typography className={classes.label} style={{ color }}>
      {label}
    </Typography>
  );
};
