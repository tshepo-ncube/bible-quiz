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
  const [remain, setRemain] = useState(3);
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
      setCurrentQuestion(questionList[randomIndex]);
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
    setCurrentQuestion(easyQuestions[randomIndex]);
  };

  const decrementQuestion = () => {
    if(remain>0){
      let r= remain -1 
        setRemain(r);
    }
  
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {currentQuestion ? (
        <>
          {" "}
          {remain == 0 ? (
            <>
              <Leaderboard />
            </>
          ) : (
            <>
              {" "}
              <QuizComponent
                question={currentQuestion}
                decrementQuestion={decrementQuestion}
                newQuestion={getRandomObject}
              />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
