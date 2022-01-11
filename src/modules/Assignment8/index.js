import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Components/Navbar";

const styles = makeStyles({
  mainContainer: {
    background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,141,192,1) 0%, rgba(61,185,201,1) 10%, rgba(135,201,217,1) 34%, rgba(0,212,255,1) 54%, rgba(1,193,243,1) 76%, rgba(197,224,231,1) 100%, rgba(14,162,194,1) 100%)`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});

const Assignment8 = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Navbar />
    </div>
  );
};

export default Assignment8;
