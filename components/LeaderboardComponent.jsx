"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Navbar from "../components/Navbar";
export default function LeaderboardComponent({ currentPoints, setPlay }) {
  const router = useRouter();

  // const leaderboardData = [
  //   { rank: 1, username: "User1", points: 100, added: +10 },
  //   { rank: 2, username: "you", points: 90, added: currentPoints },
  //   { rank: 3, username: "User3", points: 80, added: +10 },
  //   { rank: 4, username: "User2", points: 90, added: -10 },
  //   { rank: 5, username: "User3", points: 80, added: -10 },
  //   // Add more data as needed
  // ];
  const emailList = [
    "Sarah Jones",
    "Shaun Brick",
    "Allan Davids",
    "Max Kurapov",
    "Mamodike Sadiki",
    "Darryl N",
    "Takunda Chirema",
    "Andrew Mangle",
    "Alexa M",
    "Eino Mpinge",
    "Saaleh Majiet",
    "Meluleki Gama",
    "Vuaya Paulo",
  ];

  // Function to generate a random number in a given range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //{ rank: 2, username: "you", points: 90, added: currentPoints },
  // Generate data entries with random points
  const dataWithRandomPoints = emailList.map((email) => {
    const points = getRandomInt(-300, 6000);
    const adjustedPoints = Math.round(points / 40) * 40; // Ensure points are in increments of 40
    const added = getRandomInt(-200, 1230);
    const adjustedAdded = Math.round(added / 40) * 40; // Ensure added points are in increments of 40
    return {
      username: email,
      points: adjustedPoints,
      added: adjustedAdded,
    };
  });
  dataWithRandomPoints.push({
    username: "You",
    points: 340,
    added: currentPoints,
  });

  let newList = shuffleArray(dataWithRandomPoints);

  // Sort by points in descending order
  newList.sort((a, b) => b.points - a.points);

  // Assign ranks after sorting
  let leaderboardData = newList.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));

  console.log(leaderboardData);

  // Find the index of the entry with username "You"
  const index = leaderboardData.findIndex((item) => item.username === "You");

  if (index < 6) {
    // Getting the top 6 items
    leaderboardData = leaderboardData.slice(0, 6);

    //console.log(topSixItems);
  } else {
    let top3 = leaderboardData.slice(0, 3);
    // Get three items above and three items below "You"
    leaderboardData = leaderboardData.slice(Math.max(index - 1, 0), index + 2);

    top3.push(...leaderboardData);
    leaderboardData = top3;
  }

  // console.log(itemsAboveAndBelow);

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h2 className="text-lg font-bold mb-4 text-black">Donor Leaderboard</h2>

        <button
          className="bg-green-500 text-white w-full mt-2 p-2 rounded hover:bg-green-800"
          onClick={() => {
            router.push("/");
          }}
        >
          Donate
        </button>

        <p className="text-green-500 mt-2 mb-2">
          The faster you answer, the more points you get!
        </p>
        {leaderboardData.map((item, index) => (
          <LeaderboardItem
            key={index}
            rank={item.rank}
            username={item.username}
            points={item.points}
            added={item.added}
          />
        ))}
      </div>
    </div>
  );
}

const LeaderboardItem = ({ rank, username, points, added }) => {
  let badgeColor = "";
  switch (rank) {
    case 1:
      badgeColor = "bg-yellow-400";
      break;
    case 2:
      badgeColor = "bg-gray-400";
      break;
    case 3:
      badgeColor = "bg-yellow-800";
      break;
    default:
      badgeColor = "bg-blue-500";
  }
  return (
    <>
      {username === "You" ? (
        <>
          <div className="flex items-center w-full justify-between px-6 py-3 bg-blue-200 rounded-lg mb-2">
            <div className="flex items-center  space-x-3">
              <div
                className={` ${badgeColor} mr-14 text-white rounded-full w-10 h-10 flex items-center justify-center`}
              >
                {rank}
              </div>
              <div className="text-md text-black">{username}</div>
            </div>

            <div className="ml-14 flex items-center">
              <div className="bg-green-500 w-14 text-white rounded w-10 h-10 flex items-center justify-center">
                ${points}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center w-full justify-between px-6 py-3 bg-gray-100 rounded-lg mb-2">
            <div className="flex items-center  space-x-3">
              <div
                className={` ${badgeColor} mr-14 text-white rounded-full w-10 h-10 flex items-center justify-center`}
              >
                {rank}
              </div>
              <div className="text-md text-black">{username}</div>
            </div>

            <div className="ml-14 flex items-center">
              {/* <p
                className={`mr-2  ${
                  added < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {added < 0 ? <>{added}</> : <>+{added}</>}
              </p> */}
              <div className="bg-green-500 w-14  text-white rounded p-2 h-10 flex items-center justify-center">
                ${points}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
