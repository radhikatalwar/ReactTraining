import React from "react";
import Assignment9API from "./modules/Assignment9APICall";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Assignment9API />
    </Router>
  );
};

export default App;
