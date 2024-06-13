import DB from "../database_layer/DB";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";

export default class UserDB {
  static getQuestionsDone = async () => {
    let questionsExcluded = [];
    try {
      // Adjust the path to correctly reference the user's document
      const userDocRef = doc(DB, "users", "tshepo@gmail.com");
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data();
        questionsExcluded = data.QuestionsDone || [];
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error fetching QuestionsDone", e);
      return questionsExcluded;
    }
    return questionsExcluded; // Ensure the result is returned
  };
}
