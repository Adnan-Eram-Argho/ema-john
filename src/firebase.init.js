// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBStUNyMXc6VswJ-Wyj72_np9rZ3Uj6stM",
    authDomain: "ema-john-simple-c7adc.firebaseapp.com",
    projectId: "ema-john-simple-c7adc",
    storageBucket: "ema-john-simple-c7adc.appspot.com",
    messagingSenderId: "162049294639",
    appId: "1:162049294639:web:2bb991316d214f72d921da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;