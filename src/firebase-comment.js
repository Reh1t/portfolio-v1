import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHKxrtNmmSFhiHZIjQvw_3LZ5rQ2cC3ZI",
    authDomain: "portfolio-fa438.firebaseapp.com",
    projectId: "portfolio-fa438",
    storageBucket: "portfolio-fa438.firebasestorage.app",
    messagingSenderId: "621004584745",
    appId: "1:621004584745:web:bbc20f0fab3e39ce902938",
    measurementId: "G-VW4NTC1VX9"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };