// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsVPCRSpkq1yDoGGpVmAoucjdm0686SLw",
  authDomain: "todoapp-e33b8.firebaseapp.com",
  projectId: "todoapp-e33b8",
  storageBucket: "todoapp-e33b8.firebasestorage.app",
  messagingSenderId: "967130593029",
  appId: "1:967130593029:web:f8d7ac28f9711079a9e96c",
  measurementId: "G-TRZPRX4EE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)