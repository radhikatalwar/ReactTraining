import React from "react";
// import { Provider } from "react-redux";
// import { Assignment40QuizApp } from "./modules/Assignment40QuizApp";
// import { store } from "./modules/Assignment40QuizApp/store/store";
// import { BrowserRouter as Router } from "react-router-dom";
import { Assignment42FirebaseObjectStorage } from "./modules/Assignment42FirebaseObjectStorage";
// import { Test } from "./modules/Test";
import { Assignment43MiniaDashboard } from "./modules/Assignment43MiniaDashboard";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment40QuizApp />
    //   </Router>
    // </Provider>
    <Assignment42FirebaseObjectStorage />
    // <Test/>
    // <Assignment43MiniaDashboard/>
  );
};

export default App;
