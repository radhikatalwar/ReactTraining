import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDefrloe-ZWtmb0LWlofaIzh8ytK3wfeXk",
  authDomain: "contactform-278e7.firebaseapp.com",
  databaseURL: "https://contactform-278e7-default-rtdb.firebaseio.com",
  projectId: "contactform-278e7",
  storageBucket: "contactform-278e7.appspot.com",
  messagingSenderId: "760358427396",
  appId: "1:760358427396:web:2f752ee861ff9d17960e51",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
