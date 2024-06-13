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
import app from "./App";

const db = getFirestore(app);
export default db;
