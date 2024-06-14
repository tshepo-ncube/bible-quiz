"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
function page() {
  const [whyPeopleShouldDonate, setWhyPeopleShouldDonate] = useState(
    "My name is Khensile. I am a 5th year medical student at Sefako Makgatho Health Science University. I have managed to pass the past four years of my course with hard work and dedication and did not have to repeat any module/year. However, in my endeavor of working towards becoming a medical doctor, I am faced with financial struggles. I was funded by NSFAS for three years of my degree, from second year until 4th year. I currently have no funding because NSFAS has rejected my application for this year(2024). I have applied for several bursaries with no luck. Being a medical doctor has always been my dream since I was a child. Although it’s not easy, I am dedicated to my work and a hard worker. I am persistent and a firm believer in working towards my dreams. I am eager to learn and better myself. In the four years that I have completed my studies, I have learned a lot about myself. Besides being a hard worker and being dedicated to my work, I am a team player, I am patient, I enjoy working with people, and I am kind. I believe these are the qualities needed in someone who is on a path to becoming a doctor. Please help me become the medical doctor that I’ve always wanted to be."
  );

  const [messageForDonors, setMessageForDonors] = useState(
    "Thank you for donating, I won't let you down."
  );

  return (
    <>
      <Navbar />
      <div className="mt-32 p-4">
        <center>
          <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Profile
          </h1>
        </center>

        <div className="flex flex-col max-w-md mx-auto p-4">
          <label
            htmlFor="long-input"
            className="mb-2 text-gray-700 text-sm font-semibold"
          >
            Message Donors Recieve After Donating For Your Tuition
          </label>
          <input
            type="text"
            id="long-input"
            className="p-2 h-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
            value={messageForDonors}
            onChange={(e) => setMessageForDonors(e.target.value)}
          />

          <label
            htmlFor="long-input"
            className="mb-2 mt-4 text-gray-700 text-sm font-semibold"
          >
            Why should people donate to your cause
          </label>
          <textarea
            type="text"
            id="long-input"
            className="p-2 h-40 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
            value={whyPeopleShouldDonate}
            onChange={(e) => setWhyPeopleShouldDonate(e.target.value)}
          />
          <button className="bg-purple-400 p-2 text-white">
            optimize profile with ai
          </button>
        </div>

        <center>
          <button className="p-2 bg-blue-400 rounded  text-white">
            Update Profile
          </button>
        </center>
      </div>
    </>
  );
}

export default page;
