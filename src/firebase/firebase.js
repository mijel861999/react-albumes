// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu4kHJ_J2FFx_ADROUckofLctzwaQJwKA",
  authDomain: "distrakcer.firebaseapp.com",
  projectId: "distrakcer",
  storageBucket: "distrakcer.appspot.com",
  messagingSenderId: "1069137050836",
  appId: "1:1069137050836:web:0ab0aafdfdc03f99ed8f41",
  measurementId: "G-6Q0ZSPL4Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }
