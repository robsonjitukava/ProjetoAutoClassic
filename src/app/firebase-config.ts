// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz8_1EuhjkPPyeB1q750ky1D1TGTr1SFA",
  authDomain: "autoclassic-a29e4.firebaseapp.com",
  projectId: "autoclassic-a29e4",
  storageBucket: "autoclassic-a29e4.firebasestorage.app",
  messagingSenderId: "763864427025",
  appId: "1:763864427025:web:ac65c0f4355ab3581edfb0",
  measurementId: "G-6SC6R5P52G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);