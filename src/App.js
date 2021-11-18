import React from "react";
import { Provider } from "react-redux";
// import { Assignment40QuizApp } from "./modules/Assignment40QuizApp";
import { store } from "./modules/Assignment43ResumeBuilder/store/store";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment42FirebaseObjectStorage } from "./modules/Assignment42FirebaseObjectStorage";
// import { Test } from "./modules/Test";
import { Assignment43ResumeBuilder } from "./modules/Assignment43ResumeBuilder";
import { TodoBetter } from "./modules/Assignment27TodoBetter";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment40QuizApp />
    //   </Router>
    // </Provider>
    // <Assignment42FirebaseObjectStorage />
    // <Test/>
    <Provider store={store}>
      <Assignment43ResumeBuilder />
    </Provider>
    // <TodoBetter />
  );
};

export default App;
