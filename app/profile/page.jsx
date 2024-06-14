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

        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>

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
          <button className="bg-purple-400 p-2 text-white">
            Generate text
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
