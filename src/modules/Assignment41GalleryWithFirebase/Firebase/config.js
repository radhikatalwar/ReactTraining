import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZFxtyH5FXNjmIq_bee_mAlML08QVU3g4",
  authDomain: "photo-gallery-c40c2.firebaseapp.com",
  projectId: "photo-gallery-c40c2",
  storageBucket: "photo-gallery-c40c2.appspot.com",
  messagingSenderId: "481896481548",
  appId: "1:481896481548:web:fc5a2e5c5b1bc24170bf29",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
