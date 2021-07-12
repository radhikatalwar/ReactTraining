import React from "react";
// import Assignment12MaterialUI from "./modules/Assignment12MaterialUI";
// import ContextAPI from "./modules/Assignment11ContextAPI";
// import { Provider } from "react-redux";
// import { Assignment13Builder } from "./modules/Assignment13Builder";
// import { Assignment14SheetIntegration } from "./modules/Assignment14SheetIntegration";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment15CMS } from "./modules/Assignment15CMS";
// import { Time } from "./modules/Assignment16Time";
import { Assignment17Converter } from "./modules/Assignment17Converter";
import { store } from "./modules/Assignment17Converter/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Assignment17Converter />
    </Provider>

    // <Provider store={store}>
    //   <Assignment13Builder />
    // </Provider>
    // <ContextAPI />

    // <Router>
    //   <Assignment15CMS />
    // </Router>
  );
};

export default App;
