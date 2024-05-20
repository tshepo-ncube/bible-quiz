import { DB } from "../database_layer/DB";

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

export default class QuizRetrievalDB {
  static getQuestionsFromExcludedUserQuestionsArray = async (
    excludedQuestionArray
  ) => {
    const easyQuestionsRef = collection(DB, "easy");
    const qEasy = query(
      easyQuestionsRef,
      where("QuestionID", "not-in", excludedQuestionArray)
    );

    try {
      const snapshotEasy = await getDocs(qEasy);
      if (snapshotEasy.empty) {
        console.log("No matching easy questions.");
        return;
      }

      var counterEasy = 0;
      let easyQuestionsArray = [];
      snapshotEasy.forEach((doc) => {
        if (counterEasy < 10) {
          counterEasy = counterEasy + 1;
          // Create an object combining the document ID with the document data
          const easyQuestion = { id: doc.id, ...doc.data() };
          easyQuestionsArray.push(easyQuestion);
        }
      });
    } catch (error) {
      console.error("Error getting Question Data: ", error);
      alert(error);
    }
  };
}
