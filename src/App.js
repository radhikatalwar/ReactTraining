import React from "react";
import { Provider } from "react-redux";
import Counter from "./modules/Assignment10Counter/screens/counter";
import store from "./modules/Assignment10Counter/store/store";
// import Assignment9API from "./modules/Assignment9APICall";
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    // <Router>
    //   <Assignment9API />
    // </Router>
  );
};

export default App;
