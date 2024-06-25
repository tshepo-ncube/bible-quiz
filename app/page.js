"use client";

import "./globals.css"; // Import CSS for star animations
import LeaderboardComponent from "@/components/LeaderboardComponent";
import Leaderboard from "@/components/LeaderboardComponent";
import QuizComponent from "@/components/QuizComponent";
import { CircularProgress } from "@mui/material";
import ShopComponent from "@/components/ShopComponent";
import QuizRetrieval from "../business_layer/QuizRetrieval";
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
import PreLevel from "@/components/PreLevel";

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
  const [remain, setRemain] = useState(4);
  const [loading, setLoading] = useState(true);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [play, setPlay] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const getEasyQuestions = async () => {
    const easyQuestions = collection(db, "complete_the_verse");
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
    setLoading(false);
  }, []);

  const getRandomObject = () => {
    const randomIndex = Math.floor(Math.random() * easyQuestions.length);
    //   return ;
    setCurrentQuestion(easyQuestions[randomIndex]);
  };

  const decrementQuestion = () => {
    if (remain > 0) {
      let r = remain - 1;
      setRemain(r);
    }

    if (remain == 0) {
      setPlay(false);
      event({
        action: "Display Leaderboard After Play",
        category: "LeaderBoard After Play",
        label: "LeaderBoard After Play",
        value: "LeaderBoard After Play",
      });
      setRemain(4);
    }
  };
  return (
    <main className="dark:bg-gray-900 flex min-h-screen flex-col items-center justify-between p-2">
      {loading ? (
        <center className="dark:bg-gray-900 w-full h-full">
          <CircularProgress
            style={{ marginTop: 300, width: 150, height: 150 }}
          />
        </center>
      ) : (
        <>
          {currentQuestion ? (
            <>
              {!play ? (
                <div className="mt-8">
                  <Leaderboard
                    currentPoints={currentPoints}
                    setPlay={setPlay}
                  />
                </div>
              ) : (
                <>
                  {" "}
                  <QuizComponent
                    question={currentQuestion}
                    decrementQuestion={decrementQuestion}
                    remain={remain}
                    newQuestion={getRandomObject}
                    currentPoints={currentPoints}
                    setCurrentPoints={setCurrentPoints}
                  />
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      )}

      {/* <center>
        <PreLevel />
      </center> */}
    </main>
  );
}
