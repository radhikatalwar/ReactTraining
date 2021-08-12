import { makeStyles } from "@material-ui/core";
import React from "react";
import { SideBar } from "./Components/SideBar";
import { SideDrawer } from "./Components/AppBar";
import Form from "./Components/Form";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
    backgroundColor: "white",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  right: {
    backgroundColor: "#f4f6f8",
    marginLeft: "62px",
    width: "100%",
  },
  sidebar: {
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    width: "62px",
  },
});

export const Assignment27UI = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.sidebar}>
        <SideBar />
      </div>
      <div className={classes.right}>
        <SideDrawer />
        <Form />
      </div>
    </div>
  );
};
