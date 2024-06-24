import React, { useState, useEffect } from "react";
import LeaderboardComponent from "./LeaderboardComponent";

function PreLevel() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div class="bg-white dark:bg-gray-900">
      <div className="min-h-screen mt-12 bg-gray-100 p-6">
        <center>
          {/* <div class="grid grid-cols-1 gap-8 mt-56 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
           */}

          <button
            className="ml-4 p-2 bg-blue-500 dark:bg-gray-700 dark:text-white rounded-full"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <div className="w-full p-8 space-y-8 text-center border border-gray-500 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800">
            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
              Level 1
            </p>

            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              "Creation and the Fall"
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Target <br /> &#11088; &#11088; &#11088;
            </p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Play
            </button>
          </div>
          {/* </div> */}
        </center>
      </div>
    </div>
  );
}

export default PreLevel;
