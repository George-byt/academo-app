// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCLPvp8Lt0dgFclw4m2rY8eWIpHGD5-6I",
  authDomain: "academo-polygonus.firebaseapp.com",
  projectId: "academo-polygonus",
  storageBucket: "academo-polygonus.appspot.com",
  messagingSenderId: "1059357264629",
  appId: "1:1059357264629:web:393554e43d6373c0e553bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()

export {
    app,
    google
}
