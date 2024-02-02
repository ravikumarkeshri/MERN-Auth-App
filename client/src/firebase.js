// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-505e8.firebaseapp.com",
    projectId: "mern-auth-505e8",
    storageBucket: "mern-auth-505e8.appspot.com",
    messagingSenderId: "276119185870",
    appId: "1:276119185870:web:2714b7774193ca12cfe39f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);