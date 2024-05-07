import React, { useState } from "react";

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In functionality here
    console.log("Signing in with Google");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-6">
        <button
          className={`focus:outline-none ${
            activeTab === "login"
              ? "text-blue-500 border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>
        <button
          className={`focus:outline-none ${
            activeTab === "register"
              ? "text-blue-500 border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleTabChange("register")}
        >
          Register
        </button>
      </div>

      {activeTab === "login" ? (
        <form>
          {/* Login form fields go here */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Sign in with Google
          </button>
        </form>
      ) : (
        <form>
          {/* Register form fields go here */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Sign up with Google
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
