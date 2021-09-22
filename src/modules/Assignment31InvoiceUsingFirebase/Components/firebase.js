import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  databaseURL: "https://invoice-details-storing-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyD4MIV25BXxKIHmWAeJAUdyR7zBPKRxCNs",
  authDomain: "invoice-details-storing.firebaseapp.com",
  projectId: "invoice-details-storing",
  storageBucket: "invoice-details-storing.appspot.com",
  messagingSenderId: "838770073316",
  appId: "1:838770073316:web:362657f5a6c1a8f9b7d6f1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
const storage = firebase.storage();
