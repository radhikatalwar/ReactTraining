import React from "react";
import { Provider } from "react-redux";
import store from "./modules/Assignment22CovidTracker/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Assignment22CovidTracker } from "./modules/Assignment22CovidTracker";
// import { Assignment20InvoiceGenerator } from "./modules/Assignment20InvoiceGenerator";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Assignment22CovidTracker />
      </Provider>
    </Router>

    // <Assignment20InvoiceGenerator/>
  );
};

export default App;
