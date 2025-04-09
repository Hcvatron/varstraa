// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDEKOuahxddQ4OYdD7IgYMxCkSqc2R_U",
  authDomain: "varstraa-9b3a0.firebaseapp.com",
  projectId: "varstraa-9b3a0",
  storageBucket: "varstraa-9b3a0.firebasestorage.app",
  messagingSenderId: "28251883705",
  appId: "1:28251883705:web:0587351c69d7fa5c497368",
  measurementId: "G-VXY94FDS12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);