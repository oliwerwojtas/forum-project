import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRbeqa5Yp3NoWrdFZ2plOsSrrOpuCeseQ",
  authDomain: "managment-app-5c446.firebaseapp.com",
  projectId: "managment-app-5c446",
  storageBucket: "managment-app-5c446.appspot.com",
  messagingSenderId: "198722011929",
  appId: "1:198722011929:web:c03c3462c73835d846bb88",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
//for time in the future
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectStorage, projectFirestore, timestamp };
