// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjTETpwpvAEDROigWQ-VRRmm4NeC_cOg",
  authDomain: "wealthwavers-41a2a.firebaseapp.com",
  projectId: "wealthwavers-41a2a",
  storageBucket: "wealthwavers-41a2a.appspot.com",
  messagingSenderId: "582915059500",
  appId: "1:582915059500:web:c5d9c056a2e526ab7d4689",
  measurementId: "G-9WFKV5TXHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);