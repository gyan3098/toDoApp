import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4u5XE3HwOTDoHjZOjKKoklitvlVArWng",
  authDomain: "todoapp-e6451.firebaseapp.com",
  databaseURL: "https://todoapp-e6451.firebaseio.com",
  projectId: "todoapp-e6451",
  storageBucket: "todoapp-e6451.appspot.com",
  messagingSenderId: "764308517159",
  appId: "1:764308517159:web:f2f71751d643685c95b902",
});

const db = firebaseApp.firestore();

export default db;
