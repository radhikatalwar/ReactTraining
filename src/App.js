import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import store from "./modules/Assignment29Pagination/store/store";
// import { Assignment29Pagination } from "./modules/Assignment29Pagination";
import { Assignment30Firebase } from "./modules/Assignment30Firebase";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment29Pagination />
    //   </Router>
    // </Provider>
    <Router>
      <Assignment30Firebase />
    </Router>
  );
};

export default App;
