// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBG5SVHxdUBHavFVVCqRNE8U3BlWt9M-4",
  authDomain: "me-admin-a4449.firebaseapp.com",
  projectId: "me-admin-a4449",
  storageBucket: "me-admin-a4449.appspot.com",
  messagingSenderId: "547568309329",
  appId: "1:547568309329:web:a2ab336e89fe8b15d81470",
  measurementId: "G-7QFR85HY1X",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, getDocs };
