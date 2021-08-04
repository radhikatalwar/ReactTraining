import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment24DogSearch } from "./modules/Assignment24DogSearch";
import { Assignment25SelectData } from "./modules/Assignment25SelectData";
import store from "./modules/Assignment25SelectData/store/store";

const App = () => {
  return (
    // <Assignment23Api />
    // <Router>
    //   <Assignment24DogSearch />
    // </Router>
    <Provider store={store}>
      <Assignment25SelectData />
    </Provider>
  );
};

export default App;
