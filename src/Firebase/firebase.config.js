// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGIuZAai19QjQ2HcmQqJ6U-xzRfPS4ww",
  authDomain: "coffee-store-app-3b33d.firebaseapp.com",
  projectId: "coffee-store-app-3b33d",
  storageBucket: "coffee-store-app-3b33d.firebasestorage.app",
  messagingSenderId: "668857186672",
  appId: "1:668857186672:web:42d00680f0bf3ce238f7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);