// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeVGLI5VrTXN3e7iaQCxXDdIGXv8Rvn9o",
  authDomain: "netflix-gpt-b8c69.firebaseapp.com",
  projectId: "netflix-gpt-b8c69",
  storageBucket: "netflix-gpt-b8c69.appspot.com",
  messagingSenderId: "1005879376525",
  appId: "1:1005879376525:web:b802626c7ae69e50be80c4",
  measurementId: "G-SB7MZ12GBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();