import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBph-jEezpEh5DaO1aE3tGqKrrknT3p_28",
  authDomain: "forum-app-10da8.firebaseapp.com",
  projectId: "forum-app-10da8",
  storageBucket: "forum-app-10da8.appspot.com",
  messagingSenderId: "761696356801",
  appId: "1:761696356801:web:5df2586381da10da294740",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
