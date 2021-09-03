import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "./Components/Navbar";
import { Home } from "./screens/Home";
import { Category } from "./screens/Category";
import { Subcategory } from "./screens/Subcategory";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "1300px",
    minWidth: "100%",
  },
  innerContainer: {
    minHeight: "100vh",
  },
});

export const Assignment34RentalManagement = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <div className={classes.innerContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/subcategory" component={Subcategory} />
        </Switch>
      </div>
    </div>
  );
};
