import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import { MainBox } from "./Components/Mainbox/MainBox";
import { Provider } from "./Context/context";

const styles = makeStyles({
  mainContainer: { height: "auto", backgroundColor: "#e6e6e6" },
});

export const Assignment21ExpenseTracker = () => {
  const classes = styles();

  return (
    <Provider>
      <div className={classes.mainContainer}>
        <Navbar />
        <MainBox />
      </div>
    </Provider>
  );
};
