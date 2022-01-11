import React from "react";
import { Provider } from "react-redux";
import { Assignment40QuizApp } from "./modules/Assignment40QuizApp";
import { store } from "./modules/Assignment43ResumeBuilder/store/store";
// import { store } from "./modules/Assignment40QuizApp/store/store";
import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment42FirebaseObjectStorage } from "./modules/Assignment42FirebaseObjectStorage";
// import { Test } from "./modules/Test";
import { Assignment43ResumeBuilder } from "./modules/Assignment43ResumeBuilder";
import { TodoBetter } from "./modules/Assignment27TodoBetter";
import { Assignment21ExpenseTracker } from "./modules/Assignment21ExpenseTracker";
import { Assignment20InvoiceGenerator } from "./modules/Assignment20InvoiceGenerator";
import { Assignment31InvoiceUsingFirebase } from "./modules/Assignment31InvoiceUsingFirebase";
const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment40QuizApp />
    //   </Router>
    // </Provider>

    // <Assignment21ExpenseTracker />

    <Assignment20InvoiceGenerator />
    // <Router>
    //   <Assignment31InvoiceUsingFirebase />
    // </Router>
    // <Assignment42FirebaseObjectStorage />
    // <Test/>

    // <Provider store={store}>
    //   <Assignment43ResumeBuilder />
    // </Provider>
    // <TodoBetter />
  );
};

export default App;
