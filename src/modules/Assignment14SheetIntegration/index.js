import "./index.css";
import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Route, Switch } from "react-router";
import { PostDetails } from "./Components/PostDetails";

export const Assignment14SheetIntegration = () => {
  const [mode, setMode] = useState(false);

  const HandleTheme = () => {
    setMode(!mode);
  };

  return (
    <div className={"mainContainer"} mode={mode.toString()}>
      <Navbar HandleTheme={HandleTheme} mode={mode} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id/:title" component={PostDetails} />
      </Switch>
    </div>
  );
};
