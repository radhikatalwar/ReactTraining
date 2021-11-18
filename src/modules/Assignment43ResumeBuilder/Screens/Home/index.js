import { makeStyles } from "@material-ui/core";
import React from "react";
import { Heading } from "./Heading";
import { Navbar } from "./Navbar";
import { ResumeContainer } from "./ResumeContainer";

const styles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    paddingLeft: "23%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
}));

export const MainScreen = ({ handleDrawer }) => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar handleDrawer={handleDrawer} />
      <Heading />
      <ResumeContainer />
    </div>
  );
};
