import firebase from "firebase";
import "firebase/firestore";w

var firebaseConfig = {
    apiKey: "AIzaSyAjNlV-rEuibX3SKuEt3LoGW8mV25P-wi8",
    authDomain: "react-native-firebase-9c43f.firebaseapp.com",
    projectId: "react-native-firebase-9c43f",
    storageBucket: "react-native-firebase-9c43f.appspot.com",
    messagingSenderId: "138153314052",
    appId: "1:138153314052:web:86b8e178a4ec1f368a7251"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db,
  }