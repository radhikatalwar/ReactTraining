import React from "react";
import { Provider } from "react-redux";
import { Assignment22APIwithFormik } from "./modules/Assignment22APIwithFormik";
import store from "./modules/Assignment22APIwithFormik/store/store";
import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment15CMS } from "./modules/Assignment15CMS";
// import { Assignment20InvoiceGenerator } from "./modules/Assignment20InvoiceGenerator";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Assignment22APIwithFormik />
      </Provider>
    </Router>

    // <Assignment20InvoiceGenerator/>

    // <Router>
    // <Assignment15CMS/>
    // </Router>
  );
};

export default App;
