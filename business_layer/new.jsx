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
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative">
          <div className="container mx-auto text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to Mindful</h1>
            <p className="text-lg">
              Our chatbot assistant helps you manifest and achieve your goals.{" "}
              <br />
              <i>
                <strong>Try it, its free!</strong>
              </i>
            </p>
 
          </div>
        </div> */}
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Invest in Academic Potential
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Here at OpenTuition, we focus on driving more people to raise
              funds for UCT students who are talented but have student debt due
              to circumstances. We use Interledger Protocols to provide cheaper
              and better services compared to other crowd funding platforms,
              ensuring all the money goes towards debt relief
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <Link href="/sign-in">
                <div class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Get started
                  <svg
                    class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </Link>

              <a
                target="_blank"
                href="https://interledger.org/developers/get-started/"
                class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>

      <SearchBar />

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
        <div className="flex p-2 space-x-2 mt-4 md:mt-0 w-full justify-center md:justify-end">
          <button className="p-2 w-26 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
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
