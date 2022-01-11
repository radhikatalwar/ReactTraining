import { makeStyles } from "@material-ui/core";
import React from "react";
import { Form } from "./Components/Form";
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
    backgroundColor: "#3f0d12",
    backgroundImage: "linear-gradient(315deg, #3f0d12 0%, #a71d31 50%)",
  },
});

export const Assignment30Firebase = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/done" component={Done} />
      </Switch>
    </div>
  );
};
