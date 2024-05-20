import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMoOAhxxVqW8RkPNjoep0F6JeI0V89YKg",
  authDomain: "tebby-e78fc.firebaseapp.com",
  projectId: "tebby-e78fc",
  storageBucket: "tebby-e78fc.appspot.com",
  messagingSenderId: "411133037047",
  appId: "1:411133037047:web:2b642aa67d09efc37f46f2",
  measurementId: "G-WLHTNQ0HVY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
