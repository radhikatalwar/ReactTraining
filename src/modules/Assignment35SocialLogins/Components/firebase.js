import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHbeDnmXWYLfrSj5w_6KrNmbZIt5nbaJ4",
  authDomain: "social-logins-99b66.firebaseapp.com",
  projectId: "social-logins-99b66",
  storageBucket: "social-logins-99b66.appspot.com",
  messagingSenderId: "522034996491",
  appId: "1:522034996491:web:ad8baccc19360494b0ae0e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

