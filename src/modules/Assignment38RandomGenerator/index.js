import { makeStyles } from "@material-ui/core";
import React from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./screens/Home/Home";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Assignment38RandomGenerator = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <Home />
    </div>
  );
};
