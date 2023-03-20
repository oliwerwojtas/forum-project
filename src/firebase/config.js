import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrpJBexgSHk688AXufj5fyI1bknkOXMOE",
  authDomain: "forum-project-226e0.firebaseapp.com",
  projectId: "forum-project-226e0",
  storageBucket: "forum-project-226e0.appspot.com",
  messagingSenderId: "938311689499",
  appId: "1:938311689499:web:84066e73d7716806e3dfbe",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
//for time in the future
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
