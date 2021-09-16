import React from "react";
import { Provider } from "react-redux";
import { Assignment40QuizApp } from "./modules/Assignmwnt40QuizApp";
import { store } from "./modules/Assignmwnt40QuizApp/store/store";
import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment34RentalManagement } from "./modules/Assignment34RentalManagement";
// import { Assignment39LuckyDraw } from "./modules/Assignment39LuckyDraw";

const App = () => {
  return (
    // <Provider store={store}>
    //   <Router>
    //     <Assignment34RentalManagement />
    //   </Router>
    // </Provider>
    // <Assignment39LuckyDraw />
    <Provider store={store}>
      <Router>
        <Assignment40QuizApp />
      </Router>
    </Provider>
    // <Assignment40GalleryWithFirebase />
  );
};

export default App;
