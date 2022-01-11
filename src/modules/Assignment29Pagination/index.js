import { makeStyles } from "@material-ui/core";
import React from "react";
import { Navbar } from "./Components/Navbar";
import { Route, Switch } from "react-router";
import { RandomQuotes } from "./Components/SwitchComponents/RandomQuotes";
import { QuoteOfTheDay } from "./Components/SwitchComponents/QuoteOfTheDay";
import { Motivational } from "./Components/SwitchComponents/Motivational";
import { Peace } from "./Components/SwitchComponents/Peace";
import { Beauty } from "./Components/SwitchComponents/Beauty";
import { Nature } from "./Components/SwitchComponents/Nature";
import { Icons } from "./Components/Icons";
import { Others } from "./Components/SwitchComponents/Others";
import { OthersByCategory } from "./Components/SwitchComponents/OthersByCategory";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
  },
  innerContainer: {
    margin: "150px auto 20px",
    width: "80%",
  },
});

export const Assignment29Pagination = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <div className={classes.innerContainer}>
        <Icons />
        <Switch>
          <Route exact path="/" component={RandomQuotes} />
          <Route exact path="/quote" component={QuoteOfTheDay} />
          <Route exact path="/motivate" component={Motivational} />
          <Route exact path="/peace" component={Peace} />
          <Route exact path="/beauty" component={Beauty} />
          <Route exact path="/nature" component={Nature} />
          <Route exact path="/others" component={Others} />
          <Route
            exact
            path="/others/category/:val"
            component={OthersByCategory}
          />
        </Switch>
      </div>
    </div>
  );
};
