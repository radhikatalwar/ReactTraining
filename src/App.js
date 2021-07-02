import React from "react";
// import Assignment12MaterialUI from "./modules/Assignment12MaterialUI";
// import ContextAPI from "./modules/Assignment11ContextAPI";
import { Provider } from "react-redux";
import { Assignment13Builder } from "./modules/Assignment13Builder";
import { store } from "./modules/Assignment13Builder/store/store";
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Assignment13Builder />
    </Provider>
    // <ContextAPI />

    // <Router>
    //   <Assignment9API />
    // </Router>
  );
};

export default App;
