import React from "react";
import Navbar from "@/components/Navbar";
function page() {
  return (
    <>
      <Navbar />
      <div className="mt-36 p-4">
        <center>
          <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Profile
          </h1>
        </center>
        <div className="flex flex-col max-w-md mx-auto p-4">
          <label
            htmlFor="long-input"
            className="mb-2 text-gray-700 text-lg font-semibold"
          >
            Include a message for your donors
          </label>
          <input
            type="text"
            id="long-input"
            className="p-2 h-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
          />

          <label
            htmlFor="long-input"
            className="mb-2 text-gray-700 text-lg font-semibold"
          >
            Why should people donate to your cause
          </label>
          <textarea
            type="text"
            id="long-input"
            className="p-2 h-40 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here..."
          />
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
