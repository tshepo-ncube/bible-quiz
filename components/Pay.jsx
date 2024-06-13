"use client";
import "./globals.css"; // Import CSS for star animations

import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
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
  const [textInput, setTextInput] = useState("https://ilp.rafiki.money/tshepo");

  const [senderWalletUrl, setSendingWalletAddressUrl] = useState(
    "https://ilp.rafiki.money/tshepo"
  );
  const [responseMessage, setResponseMessage] = useState("");
  const [responseOK, setResponseOk] = useState(null);

  const [CONTINUE_ACCESS_TOKEN, setCONTINUE_ACCESS_TOKEN] = useState(null);
  const [CONTINUE_URI, setCONTINUE_URI] = useState(null);
  const [QUOTE_URL, setQUOTE_URL] = useState(null);
  const [INTERACT_URL, setINTERACT_URL] = useState(null);

  const handleRedirect = () => {
    window.open(INTERACT_URL, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const response = await fetch("http://localhost:3040/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senderWalletUrl }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setResponseMessage(`Server response: ${data.message}`);
        setResponseOk(true);
        // const [CONTINUE_ACCESS_TOKEN, setCONTINUE_ACCESS_TOKEN] =
        //   useState(null);
        // const [CONTINUE_URI, setCONTINUE_URI] = useState(null);
        // const [QUOTE_URL, setQUOTE_URL] = useState(null);
        // const [INTERACT_URL, setINTERACT_URL] = useState(null);
        setCONTINUE_ACCESS_TOKEN(data.CONTINUE_ACCESS_TOKEN);
        setCONTINUE_URI(data.CONTINUE_URI);
        setQUOTE_URL(data.QUOTE_URL);
        setINTERACT_URL(data.INTERACT_URL);

        localStorage.setItem(
          "CONTINUE_ACCESS_TOKEN",
          data.CONTINUE_ACCESS_TOKEN
        );
        localStorage.setItem("CONTINUE_URI", data.CONTINUE_URI);
        localStorage.setItem("QUOTE_URL", data.QUOTE_URL);
        localStorage.setItem("INTERACT_URL", data.INTERACT_URL);
      } else {
        setResponseMessage(`Error: ${data.error}`);
        responseOK(false);
      }
    } catch (error) {
      responseOK(false);
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  const finishPayment = async (interactRefParam) => {
    const data = {
      quoteUrl: localStorage.getItem("QUOTE_URL"),
      continueUri: localStorage.getItem("CONTINUE_URI"),
      continueAccessToken: localStorage.getItem("CONTINUE_ACCESS_TOKEN"),
      interactRef: interactRefParam,
      sendingWalletAddressUrl: senderWalletUrl,
    };

    try {
      const response = await fetch("http://localhost:3040/finish_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from /done_pay:", result);
      alert("Payment Done");
      localStorage.clear();
    } catch (error) {
      console.error("Error sending data to /done_pay:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hashParam = urlParams.get("hash");
    const interactRefParam = urlParams.get("interact_ref");

    if (hashParam && interactRefParam) {
      console.log(hashParam);
      console.log(interactRefParam);

      finishPayment(interactRefParam);
    } else {
      console.log("Not waiting...");
    }
  }, []);

  return (
    <div className="p-6 justify-center mt-40">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="sendingWalletAddress"
            className="block text-gray-700 font-bold mb-2"
          >
            Sending Wallet Address:
          </label>
          <input
            type="text"
            id="sendingWalletAddress"
            value={senderWalletUrl}
            onChange={(e) => setSendingWalletAddressUrl(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your wallet address"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {responseMessage && <p className="mt-4">{responseMessage}</p>}
      {responseOK && (
        <div>
          {/* 
   <button
            href="https://forms.gle/jxjnh5uFe1RksaREA"
            target="_blank"
            onClick={() => {
              window.open(, "_blank");
            }}
            className="bg-green-500 text-white w-full mt-2 p-2 rounded hover:bg-green-600"
          >
            Confirm Payment
          </button> */}

          <button
            className="bg-green-500 text-white w-full mt-2 p-2 rounded hover:bg-green-600"
            onClick={handleRedirect}
          >
            Confirm Payment
          </button>

          <p className="mt-4">{responseMessage}</p>
        </div>
      )}
    </div>
  );
}
