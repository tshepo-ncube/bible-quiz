"use client";

import "./globals.css"; // Import CSS for star animations
import LeaderboardComponent from "@/components/LeaderboardComponent";
import Leaderboard from "@/components/LeaderboardComponent";
import QuizComponent from "@/components/QuizComponent";
import ShopComponent from "@/components/ShopComponent";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  updateDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
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

export default function Home() {
  const [easyQuestions, setEasyQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const getEasyQuestions = async () => {
    const easyQuestions = collection(db, "easy_level");
    try {
      const snapshot = await getDocs(easyQuestions);
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      const questionList = [];
      snapshot.forEach((doc) => {
        questionList.push(doc.data());
        console.log(doc.id, "=>", doc.data());
      });
      setEasyQuestions(questionList);
      const randomIndex = Math.floor(Math.random() * questionList.length);
      //   return ;
      let q = questionList[randomIndex];
     
      
 
      setCurrentQuestion({"hint":q.hint,"level":q.level,"options":shuffleArray(q.options),"question":q.question, "answer":q.answer});
      
      // getRandomObject();
      console.log(questionList);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    getEasyQuestions();
  }, []);

  const getRandomObject = () => {
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    //   return ;

      let q =easyQuestions[randomIndex];
     
      
 
      setCurrentQuestion({"hint":q.hint,"level":q.level,"options":shuffleArray(q.options),"question":q.question, "answer":q.answer});
      
    //setCurrentQuestion(easyQuestions[randomIndex]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {currentQuestion ? (
        <>
          {" "}
          <QuizComponent
            question={currentQuestion}
            newQuestion={getRandomObject}
          />
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
