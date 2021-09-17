import React from "react";
import { Provider } from "react-redux";
import { Assignment40QuizApp } from "./modules/Assignment40QuizApp";
import { store } from "./modules/Assignment40QuizApp/store/store";
import { BrowserRouter as Router } from "react-router-dom";
// import { Assignment41GalleryWithFirebase } from "./modules/Assignment41GalleryWithFirebase";
// import { Assignment39LuckyDraw } from "./modules/Assignment39LuckyDraw";

const App = () => {
  return (
    // <Assignment39LuckyDraw />
    <Provider store={store}>
      <Router>
        <Assignment40QuizApp />
      </Router>
    </Provider>
    // <Assignment41GalleryWithFirebase />
  );
};

export default App;
