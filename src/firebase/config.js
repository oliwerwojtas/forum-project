import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjJzmAQG9YZyMEw2tTdUvyTblO8PnpIz0",
  authDomain: "learning-project-31a16.firebaseapp.com",
  projectId: "learning-project-31a16",
  storageBucket: "learning-project-31a16.appspot.com",
  messagingSenderId: "1097669901007",
  appId: "1:1097669901007:web:71c6c345222bed8e3455ba",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
