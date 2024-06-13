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
  apiKey: "AIzaSyDQCm-7Wl1SQLIe9K6VtSyysbbo7RHi1Yc",
  authDomain: "ucthackathon.firebaseapp.com",
  projectId: "ucthackathon",
  storageBucket: "ucthackathon.appspot.com",
  messagingSenderId: "787845046946",
  appId: "1:787845046946:web:796b7b36efc7a5a2406dfb",
  measurementId: "G-PBXLW55PJN",
};

const app = initializeApp(firebaseConfig);

export default app;
