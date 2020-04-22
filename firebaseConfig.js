// import firebase from "firebase";
import * as firebase from "firebase/app";
require("firebase/database");
require("firebase/firestore");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6ydALrnw_wUnMbZT_RJyeDC8BEDvcd0",
  authDomain: "auroradw-fc514.firebaseapp.com",
  databaseURL: "https://auroradw-fc514.firebaseio.com",
  projectId: "auroradw-fc514",
  storageBucket: "auroradw-fc514.appspot.com",
  messagingSenderId: "1066013554551",
  appId: "1:1066013554551:web:5cb3458c0f10ceca891372",
  measurementId: "G-FXH328D2ZN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function setApplicant(name, email, phone) {
  const applicant = {
    name,
    email,
    phone
  };

  db.collection("Applicants")
    .doc(email)
    .set(applicant)
    .then(function() {
      console.log("Applicant successfully written!");
    });
}

function sendQuestion(name, email, questionText) {
  const question = {
    name,
    email,
    questionText
  };

  db.collection("Questions")
    .doc(email)
    .set(question)
    .then(function() {
      console.log("Question successfully written!");
    });
}

export { setApplicant, sendQuestion };
