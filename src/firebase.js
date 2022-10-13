// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa71ywd8m4nIXp8KoyRYojarjo9u7vqsw",
  authDomain: "fir-auth-yt-75469.firebaseapp.com",
  projectId: "fir-auth-yt-75469",
  storageBucket: "fir-auth-yt-75469.appspot.com",
  messagingSenderId: "715425555587",
  appId: "1:715425555587:web:17e5898165b11bf90f27b6",
  measurementId: "G-DBG4D3LHQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app