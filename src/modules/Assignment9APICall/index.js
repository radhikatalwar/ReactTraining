import { makeStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login";
import Mainpage from "./Components/Mainpage";
import Home from "./Components/Home";
import UserDetails from "./Components/UserDetails";
import PrivateRoute from "./Components/PrivateRoute";

const styles = makeStyles({
  mainContainer: {
    background: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%) no-repeat center center fixed`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const Assignment9API = () => {
  const classes = styles();
  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/user" component={Mainpage} />
        <PrivateRoute exact path="/user/:id" component={UserDetails} />
      </Switch>
    </div>
  );
};

export default Assignment9API;
