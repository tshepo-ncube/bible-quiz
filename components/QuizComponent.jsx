"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QuestionComponent from "@/components/QuizComponent";
import Head from "next/head";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function QuizComponent({
  question,
  newQuestion,
  decrementQuestion,
  currentPoints,
  setCurrentPoints,
  remain,
}) {
  const [clickedOption, setClickedOption] = useState(null);
  const [playLevelUp, setPlayLevelUp] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [progress, setProgress] = useState(7);
  const [showHint, setShowHint] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [Qoptions, setOptions] = useState(null);
  const newQuestionShow = () => {
    // console.log("Executing after 2 seconds");
    // setClickedOption(null);

    // newQuestion();

    // setProgress(7);  setIntervalId(id);
    console.log("Executing after 2 seconds");
    setClickedOption(null);
    //decrementQuestion();
    newQuestion();
    // Clear the existing interval
    clearInterval(intervalId);
    setProgress(7);
    decrementQuestion();
    // Start a new interval
    const id = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress == 0) {
          handleTimeup();

          // Wait for 2 seconds before executing the delayedFunction
          setTimeout(newQuestionShow, 2000);
        }
        if (prevProgress <= 0) {
          decrementQuestion();
          clearInterval(id);
          return 0;
        }
        return prevProgress - 1;
      });
    }, 1000);

    setIntervalId(id);
  };

  const handleLevelUp = () => {
    setPlayLevelUp(true);
    // Play the sound

    if (soundOn) {
      const audio = new Audio("/success-1-6297.mp3");
      audio.play();
    }
  };
  const handleLevelDown = () => {
    setPlayLevelUp(true);
    // Play the sound

    if (soundOn) {
      const audio = new Audio("/error.mp3");
      audio.play();
    }
  };

  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray); // Output will be a shuffled version of the array [1, 2, 3, 4, 5]

  const handleTimeup = () => {
    setPlayLevelUp(true);
    // Play the sound

    if (soundOn) {
      const audio = new Audio("/error_sound.mp3");
      audio.play();
    }
  };

  //const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // Example options
  const object = {
    question: "Who wrote the Book of Acts in the New Testament?",
    options: ["Luke", "Paul", "John", "Peter"],
    answer: "Luke",
    hint: "This author also wrote one of the four Gospels.",
    level: "hard",
  };

  useEffect(() => {
    setOptions(shuffleArray(question.options));
  }, [question]);

  useEffect(() => {
    setOptions(shuffleArray(question.options));
    const id = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          handleTimeup();
          setCurrentPoints(currentPoints - 40);
          decrementQuestion();
          setTimeout(newQuestionShow, 2000);
          clearInterval(id);
          return 0;
        }
        return prevProgress - 1;
      });
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
    getEasyQuestions();
  }, []);

  //     useEffect(() => {
  //   setOptions(shuffleArray(question.options));
  //   const id = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress == 0) {
  //         handleTimeup();
  //         // Wait for 2 seconds before executing the delayedFunction
  //         setTimeout(newQuestionShow, 2000);
  //       }
  //       if (prevProgress <= 0) {
  //         clearInterval(id);
  //         return 0;
  //       }
  //       return prevProgress - 1;
  //     });
  //   }, 1000);

  //   setIntervalId(id);

  //   return () => clearInterval(id);
  // }, [question, intervalId]); // Include intervalId in the dependency array

  const handleHint = () => {
    setShowHint(true);
  };
  const explode = (x, y) => {
    const particles = 15;
    const explosion = document.createElement("div");
    explosion.classList.add("explosion");
    document.body.appendChild(explosion);

    explosion.style.left = x - explosion.offsetWidth / 2 + "px";
    explosion.style.top = y - explosion.offsetHeight / 2 + "px";

    for (let i = 0; i < particles; i++) {
      const xCoord =
        explosion.offsetWidth / 2 +
        rand(80, 150) *
          Math.cos((2 * Math.PI * i) / rand(particles - 10, particles + 10));
      const yCoord =
        explosion.offsetHeight / 2 +
        rand(80, 150) *
          Math.sin((2 * Math.PI * i) / rand(particles - 10, particles + 10));
      const color = `${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}`;
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.backgroundColor = `rgb(${color})`;
      particle.style.top = yCoord + "px";
      particle.style.left = xCoord + "px";
      explosion.appendChild(particle);

      if (i === 0) {
        particle.addEventListener("animationend", () => {
          explosion.remove();
        });
      }
    }
  };

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max + 1)) + min;
  };

  const handlExplosion = () => {
    const button = e.target;
    const buttonRect = button.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;
    explode(x, y);
  };
  const stopProgress = () => {
    clearInterval(intervalId);
  };
  const handleButtonClick = (option) => {
    setClickedOption(option.target.name);
    stopProgress();
    console.log(option.target.name);
    console.log(option.target);
    // Check if the clicked option is correct
    if (option.target.name === question.answer) {
      //alert("yess");
      handleLevelUp();
      setCurrentPoints((currentPoints + 40) * progress);
      const button = option.target;
      const buttonRect = button.getBoundingClientRect();
      const x = buttonRect.left + buttonRect.width / 2;
      const y = buttonRect.top + buttonRect.height / 2;
      explode(x, y);
    } else {
      //alert("nooo");
      setCurrentPoints(currentPoints - 40);
      handleLevelDown();
    }

    // Wait for 2 seconds before executing the delayedFunction
    setTimeout(newQuestionShow, 2000);
  };
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="p-4" style={{ marginTop: 18 }}>
        <center>
          <p className="justify-center items-center font-semibold">
            {" "}
            {soundOn ? (
              <>
                {" "}
                <VolumeUpIcon
                  sx={{ fontSize: 30 }}
                  onClick={() => {
                    setSoundOn(false);
                  }}
                />
              </>
            ) : (
              <>
                <VolumeOffIcon
                  sx={{ fontSize: 30 }}
                  onClick={() => {
                    setSoundOn(true);
                  }}
                />
              </>
            )}{" "}
            &#128151; 7 &#x1f48e; 208
          </p>
        </center>
        <h1 className="text-black">{remain}</h1>
        <h2 className="text-lg font-bold mb-2">{question.question}</h2>
        <div className="p-4">
          <div className="relative h-10 bg-gray-800 rounded ">
            <div
              className={`absolute top-0 left-0 text-center h-full rounded p-2 text-white ${
                progress < 4 ? "bg-red-500" : "bg-blue-500"
              }`}
              style={{
                width: `${progress * 14}%`,
                transition: "width 1s ease-in-out",
              }}
            >
              {progress}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 sm:grid-cols-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              name={option}
              onClick={handleButtonClick}
              className={`  text-black py-2 px-4 rounded w-full lg:w-auto  ${
                clickedOption
                  ? option === question.answer
                    ? "bg-green-500"
                    : clickedOption !== option
                    ? "bg-white"
                    : "bg-red-500"
                  : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showHint ? (
          <>
            <p className=" text-black w-full mt-2 p-2 rounded">
              {question.hint}
            </p>
          </>
        ) : (
          <></>
        )}
        <div className="mt-6">
          <button
            onClick={handleHint}
            className="bg-yellow-500 text-white w-full mt-4 p-2 rounded hover:bg-yellow-600"
          >
            show hint &#x1f48e; 100
          </button>

          <button className="bg-purple-400 text-white w-full mt-4 p-2 rounded hover:bg-purple-800">
            more time &#x1f48e; 90
          </button>

          <button className="bg-blue-400 text-white w-full mt-4 p-2 rounded hover:bg-blue-800">
            skip &#x1f48e; 98
          </button>
        </div>
      </div>
    </main>
  );
}
