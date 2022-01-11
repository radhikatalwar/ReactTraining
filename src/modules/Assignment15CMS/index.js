import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "./Components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import { MainBox } from "./Components/Mainbox/MainBox";
import { PostDetails } from "./Components/PostDetails/PostDetails";

const styles = makeStyles({
  mainContainer: { height: "100vh" },
});

export const Assignment15CMS = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainBox} />
        <Route exact path="/post/:id/:title" component={PostDetails} />
      </Switch>
    </div>
  );
};
