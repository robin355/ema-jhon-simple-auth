// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfjYQS7gCs59J2fMvk2hHmORTWFGHAhBc",
    authDomain: "ema-jhon-simple-auth-f7dba.firebaseapp.com",
    projectId: "ema-jhon-simple-auth-f7dba",
    storageBucket: "ema-jhon-simple-auth-f7dba.appspot.com",
    messagingSenderId: "12798788602",
    appId: "1:12798788602:web:a82a34af7521601bfdda43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;