import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWe3fL0GjhXDKusbR8UkVHQtyFJNhtQOM",
  authDomain: "fir-object-storage.firebaseapp.com",
  projectId: "fir-object-storage",
  storageBucket: "fir-object-storage.appspot.com",
  messagingSenderId: "83124942447",
  appId: "1:83124942447:web:be32d6a02be53ca6debf9a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
