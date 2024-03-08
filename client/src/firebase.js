// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-rishi.firebaseapp.com",
  projectId: "mern-estate-rishi",
  storageBucket: "mern-estate-rishi.appspot.com",
  messagingSenderId: "731958155615",
  appId: "1:731958155615:web:64bd67f39c829d922ffeea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);