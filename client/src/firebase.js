// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-42b6a.firebaseapp.com",
  projectId: "mern-auth-42b6a",
  storageBucket: "mern-auth-42b6a.appspot.com",
  messagingSenderId: "773370309165",
  appId: "1:773370309165:web:10f116dfd13821a38fe6a4",
  measurementId: "G-JLN2MLFGXP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);