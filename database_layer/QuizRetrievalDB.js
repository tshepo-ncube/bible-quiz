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
    const easyQuestionsRef = collection(DB, "complete_the_verse");
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

  static getAllCompleteTheVerse = async () => {
    const all = collection(db, "complete_the_verse");
    try {
      const snapshot = await getDocs(all);
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      const questionList = [];
      snapshot.forEach((doc) => {
        questionList.push(doc.data());
        console.log({ id: doc.id, ...doc.data() });
      });
      localStorage.setItem(
        "AllCompleteTheVerseQuestions",
        JSON.stringify(questionList)
      );

      const questionsDone = localStorage.getItem("QuestionsDone");
      if (!questionsDone) {
        localStorage.setItem("QuestionsDone", JSON.stringify([]));
      }
      // //setEasyQuestions(questionList);
      // const randomIndex = Math.floor(Math.random() * questionList.length);
      // //   return ;
      // setCurrentQuestion(questionList[randomIndex]);
      // // getRandomObject();
      // console.log(questionList);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
}
