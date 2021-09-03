import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment31InvoiceUsingFirebase } from "./modules/Assignment31InvoiceUsingFirebase";
// import { Assignment13Builder } from "./modules/Assignment13Builder";
import { store } from "./modules/Assignment34RentalManagement/store/store";
import { Assignment34RentalManagement } from "./modules/Assignment34RentalManagement";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Assignment13Builder />
    // </Provider>
    // <Assignment21ExpenseTracker />
    // <Router>
    //   <Assignment31InvoiceUsingFirebase />
    // </Router>
    <Provider store={store}>
      <Router>
        <Assignment34RentalManagement />
      </Router>
    </Provider>
  );
};

export default App;
