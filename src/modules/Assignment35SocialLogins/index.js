import { makeStyles } from "@material-ui/core";
import React from "react";
import { Signup } from "./Components/Signup";
import { Route, Switch } from "react-router";
import { Done } from "./Components/Done";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #00416a, #e4e5e6)",
  },
});

export const Assignment35SocialLogins = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/done" component={Done} />
      </Switch>
    </div>
  );
};
