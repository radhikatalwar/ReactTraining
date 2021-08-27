import React from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
import { Assignment33PDFGenerator } from "./modules/Assignment33PDFGenerator";
// import store from "./modules/Assignment29Pagination/store/store";
// import { Assignment29Pagination } from "./modules/Assignment29Pagination";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment29Pagination />
    //   </Router>
    // </Provider>

    <Assignment33PDFGenerator />
  );
};

export default App;
