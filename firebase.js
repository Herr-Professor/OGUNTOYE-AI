// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCblDkWEE-_znEAwLK7_6huSTQk7-7rd2g",
  authDomain: "oguntoyeai.firebaseapp.com",
  projectId: "oguntoyeai",
  storageBucket: "oguntoyeai.appspot.com",
  messagingSenderId: "602775491042",
  appId: "1:602775491042:web:a2360cb4038de0ea6fa9bb",
  measurementId: "G-QWJE74B1SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);