// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzWThBcpedb6tRBjfgej7unThsFQhNR7k",
  authDomain: "playtoys-26928.firebaseapp.com",
  projectId: "playtoys-26928",
  storageBucket: "playtoys-26928.appspot.com",
  messagingSenderId: "992864575638",
  appId: "1:992864575638:web:038d0c8d82fcd7bafda2b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
