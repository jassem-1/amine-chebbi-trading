// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiC8AHaW5wxtF1dg8ZKWADIiKuhDmyPEQ",
  authDomain: "amine-portfolio.firebaseapp.com",
  projectId: "amine-portfolio",
  storageBucket: "amine-portfolio.firebasestorage.app",
  messagingSenderId: "299667414103",
  appId: "1:299667414103:web:f9aa021013a88ad9865712",
  measurementId: "G-0PT5QPYF3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { db,auth };