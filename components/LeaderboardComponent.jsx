"use client";
import React, { useEffect, useState } from "react";

export default function LeaderboardComponent() {
  const leaderboardData = [
    { rank: 1, username: "User1", points: 100, added: +10 },
    { rank: 2, username: "User2", points: 90, added: +10 },
    { rank: 3, username: "User3", points: 80, added: +10 },
    { rank: 4, username: "User2", points: 90, added: -10 },
    { rank: 5, username: "User3", points: 80, added: -10 },
    // Add more data as needed
  ];
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Leaderboard</h2>
      {leaderboardData.map((item, index) => (
        <LeaderboardItem
          key={index}
          rank={item.rank}
          username={item.username}
          points={item.points}
          added={item.added}
        />
      ))}
      <button className="bg-green-500 text-white w-full mt-4 p-2 rounded hover:bg-green-800">
        play
      </button>
      <button className="bg-pink-400 text-white w-full mt-4 p-2 rounded hover:bg-pink-800">
        &#128151; new life &#x1f48e; 200
      </button>
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
        <p className={`mr-2  ${added < 0 ? "text-red-500" : "text-green-500"}`}>
          {added < 0 ? <>{added}</> : <>+{added}</>}
        </p>
        <div className="bg-green-500  text-white rounded-full w-10 h-10 flex items-center justify-center">
          {points}
        </div>
      </div>
    </div>
  );
};
