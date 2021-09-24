import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { ContentEditableDiv } from "../../../Components/ContentEditableDiv";
import { DividerComp } from "../../../Components/Divider";

const styles = makeStyles({
  container: {
    margin: "20px 0",
  },
  heading: {
    fontSize: "27px",
    letterSpacing: "1px",
  },
  label: {
    marginTop: "20px",
    fontSize: "19px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },
});

export const ContactDetails = () => {
  const classes = styles();

  const { color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <div className={classes.container}>
      <DividerComp />
      <Typography className={classes.heading} style={{ color }}>
        {"Get In touch!"}
      </Typography>
      <Typography className={classes.label} style={{ color }}>
        {"Mobile No."}
      </Typography>
      <ContentEditableDiv
        value={"mobile"}
        style={{
          fontSize: "14px",
        }}
      />
      <Typography className={classes.label} style={{ color }}>
        {"Email"}
      </Typography>
      <ContentEditableDiv
        value={"email"}
        style={{
          fontSize: "14px",
        }}
      />
      <Typography className={classes.label} style={{ color }}>
        {"Address"}
      </Typography>
      <ContentEditableDiv
        value={"address"}
        style={{
          fontSize: "14px",
        }}
      />
    </div>
  );
};
