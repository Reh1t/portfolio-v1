import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKxrtNmmSFhiHZIjQvw_3LZ5rQ2cC3ZI",
  authDomain: "portfolio-fa438.firebaseapp.com",
  projectId: "portfolio-fa438",
  storageBucket: "portfolio-fa438.firebasestorage.app",
  messagingSenderId: "621004584745",
  appId: "1:621004584745:web:bbc20f0fab3e39ce902938",
  measurementId: "G-VW4NTC1VX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };