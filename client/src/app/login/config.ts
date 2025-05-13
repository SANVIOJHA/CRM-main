// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCexYViVpCBdd9mUo4_9PmC-TyXh3DAxoY",
  authDomain: "xenp-21ffa.firebaseapp.com",
  projectId: "xenp-21ffa",
  storageBucket: "xenp-21ffa.firebasestorage.app",
  messagingSenderId: "13116061547",
  appId: "1:13116061547:web:f4196b0ca912b140c0fe2e",
  measurementId: "G-P0THZ2NG09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);