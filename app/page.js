"use client";
import "./globals.css"; // Import CSS for star animations
import Link from "next/link";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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

import db from "../database_layer/DB";

const step1 = async () => {
  console.log("starting step one now.");

  // const client = await createAuthenticatedClient({
  //   walletAddressUrl: config.CLIENT_WALLET_ADDRESS_URL,
  //   keyId: config.KEY_ID,
  //   privateKey: config.PRIVATE_KEY_PATH,
  //   validateResponses: false, // Use this flag if you are having issues with the yaml files of the repo
  // });
};

const step2 = async () => {};

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Card Title 1",
      description: "This is a description for card 1.",
      imageUrl:
        "https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png",
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "This is a description for card 2.",
      imageUrl:
        "https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "This is a description for card 3.",
      imageUrl:
        "https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png",
    },
    {
      id: 4,
      title: "Card Title 4",
      description: "This is a description for card 4.",
      imageUrl:
        "https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png",
    },
  ];

  const cardData = {
    imageUrl:
      "https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png",
    title: "B.Com Information Systems",
    subtitle: "University of Cape Town",
    raisedAmount: 60100.0,
    totalAmount: 183996.3,
  };

  const progressPercentage =
    (cardData.raisedAmount / cardData.totalAmount) * 100;

  return (
    <div>
      <Navbar isHome={true} />
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage:
            "url('https://live.southafrica.net/media/207863/uct-feauture.jpg?anchor=center&mode=crop&quality=100&width=1920&height=810&bgcolor=white&rnd=131764714520000000')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-16">
          <div className="container mx-auto text-center p-4">
            <h1 className="text-4xl font-bold mb-4">
              Invest in Academic Potential
            </h1>
            <p className="text-lg">
              Here at OpenTuition, we focus on driving more people to raise
              funds for UCT students who are talented but have student debt due
              to circumstances. We use Interledger Protocols to provide cheaper
              and better services compared to other crowd funding platforms,
              ensuring all the money goes towards debt relief
            </p>
          </div>
        </div>
      </div>

      <div className="p-16">
        <center>
          <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-xl dark:text-white">
            Student Search
          </h1>
        </center>

        <div style={{ marginTop: -20 }}>
          <SearchBar />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden"
              onClick={() => {
                window.open(
                  "http://localhost:3000/students/YPjqvpGf1xwYBkEOtGIz",
                  "_self"
                );
              }}
            >
              <img
                className="w-full h-48 object-cover"
                src={cardData.imageUrl}
                alt="Student"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{cardData.title}</h2>
                <p className="text-gray-600">{cardData.subtitle}</p>

                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${progressPercentage}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-blue-600">
                      R {cardData.raisedAmount.toLocaleString()}
                    </span>
                    <span className="font-semibold text-gray-600">
                      R {cardData.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* <center>
                  <button className="bg-blue-400 p-2 rounded text-white">
                    Donate
                  </button>
                </center> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white">
      <div className="flex flex-col md:flex-row md:flex-wrap space-y-4 md:space-y-0 md:space-x-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-6xl">
        <input
          type="text"
          placeholder="Name of student"
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Name of the Degree"
          className="mt-2 flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="mt-2 flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Sex</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          <option value="science">Science</option>
          {/* Add more options as needed */}
        </select>
        <select className="mt-2 flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Faculty Group</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          <option value="science">Science</option>
          {/* Add more options as needed */}
        </select>
        {/* <select className="ml-2 mt-4 flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Year of Study</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
       
        </select> */}
        <div className="flex p-2 px-12 space-x-2 mt-4 md:mt-0 w-full justify-center md:justify-end">
          <button className="p-2 px-12 w-26 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            clear
          </button>
          <button className=" flex w-26 items-center p-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            search
          </button>
        </div>
      </div>
    </div>
  );
};
