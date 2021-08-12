import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./modules/Assignment28Quotes/store/store";
// import { Assignment27UI } from "./modules/Assignment27UI";
import { Assignment28Quotes } from "./modules/Assignment28Quotes";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Assignment28Quotes />
      </Router>
    </Provider>
  );
};

export default App;
