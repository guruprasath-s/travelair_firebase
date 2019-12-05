import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCNxdoFxAbwGCDvnMnApg8IIwdg1RjIcqI",
  authDomain: "travelair-23a63.firebaseapp.com",
  databaseURL: "https://travelair-23a63.firebaseio.com",
  projectId: "travelair-23a63",
  storageBucket: "travelair-23a63.appspot.com",
  messagingSenderId: "93984889150",
  appId: "1:93984889150:web:864b2a02c66233a2a7f46f",
  measurementId: "G-M8H6XBCLZW"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
