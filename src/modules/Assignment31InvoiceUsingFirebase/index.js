import { makeStyles } from "@material-ui/core";
import React from "react";
import { Invoice } from "./Components/Invoice/Invoice";
import { Route, Switch } from "react-router";
import { Final } from "./Components/Final";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#3f0d12",
    backgroundImage:
      "linear-gradient(45deg, rgba(32,190,206,1) 11%, rgba(51,150,160,1) 22%, rgba(28,152,165,1) 35%, rgba(59,194,208,1) 51%, rgba(46,148,159,1) 69%, rgba(4,138,152,1) 83%, rgba(39,126,127,1) 100%, rgba(103,66,251,1) 100%);",
  },
});

export const Assignment31InvoiceUsingFirebase = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={Invoice} />
        <Route exact path="/final" component={Final} />
      </Switch>
    </div>
  );
};
