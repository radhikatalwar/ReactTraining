import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { ContentEditableDiv } from "../../../Components/ContentEditableDiv";

const styles = makeStyles({
  label: {
    margin: "0 0 10px 0",
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },
});

export const ProfessionalGoal = () => {
  const classes = styles();

  const { color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.container}>
      <Typography className={classes.label} style={{ color }}>
        {"Professional Goal"}
      </Typography>
      <ContentEditableDiv
        value={"goal"}
        style={{
          fontSize: "16px",
        }}
      />
    </div>
  );
};
