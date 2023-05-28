
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "u-capstone-ac91a.firebaseapp.com",
  projectId: "u-capstone-ac91a",
  storageBucket: "u-capstone-ac91a.appspot.com",
  messagingSenderId: "380059427355",
  appId: "1:380059427355:web:ff52a1d6d34ffb09620ebe",
  measurementId: "G-5JQSEV0MQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);