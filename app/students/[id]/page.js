"use client";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import db from "../../../database_layer/DB";
const StudentPage = ({ params }) => {
  const { id } = params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [responseMessage, setResponseMessage] = useState("");
  const [responseOK, setResponseOk] = useState(null);

  const [CONTINUE_ACCESS_TOKEN, setCONTINUE_ACCESS_TOKEN] = useState(null);
  const [CONTINUE_URI, setCONTINUE_URI] = useState(null);
  const [QUOTE_URL, setQUOTE_URL] = useState(null);
  const [INTERACT_URL, setINTERACT_URL] = useState(null);
  const [contribution, setContribution] = useState(10);
  const [studentURL, setStudentURL] = useState(null);

  const [studentID, setStudentID] = useState(null);

  const [senderWalletUrl, setSendingWalletAddressUrl] = useState(
    "https://ilp.rafiki.money/tshepo"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.clear();
    try {
      const response = await fetch("http://localhost:3040/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderWalletUrl,
          contribution,
          studentURL,
          studentID,
        }),
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

  const handleRedirect = () => {
    window.open(INTERACT_URL, "_blank");
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
    console.log("useEffect called"); // Log to ensure useEffect is called
    if (id) {
      console.log("Fetching user with ID:", id); // Log the ID being fetched
      setStudentID(id);
      const fetchUser = async () => {
        const studentRef = doc(db, "students", id);
        try {
          const snapshot = await getDoc(studentRef);
          if (!snapshot.exists()) {
            console.log("No such document!");
            setLoading(false);
            return;
          }
          console.log("Document data:", snapshot.data()); // Log the fetched data
          setUserData(snapshot.data());
        } catch (error) {
          console.error("Error getting document: ", error);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id]);

  useEffect(() => {
    setStudentURL(window.location.href);
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

  if (loading) {
    return (
      <div>
        <center>
          <CircularProgress
            style={{ marginTop: 300, width: 150, height: 150 }}
          />
        </center>
      </div>
    );
  }

  if (!userData) {
    return <div>No user found with ID: {id}</div>;
  }

  return (
    <div className="mt-20">
      <div className="bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 ml-4 mt-10">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://collegepossible.org/wp-content/uploads/2022/12/stock_students_091_web.png"
                alt="Student"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Tshegofatso [2022 - 2024]
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                Matriculated from Dithothwaneng University of South Africa, BED
                (SEN PHASE FET TEACH) (90104), 2024, First Year (Graduating in
                2026)
              </p>
              <p className="mt-2 text-gray-500">
                Total funding needed R 6,470.00
              </p>
              <p className="mt-2 text-gray-500">
                R 0.00 funded | R 6,470.00 funding left
              </p>

              <div className="flex mt-4">
                <button className="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span>Share to your network</span>
                </button>
                <div className="ml-2">
                  <a href="#" className="text-blue-500">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="ml-2 text-blue-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="ml-2 text-blue-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="ml-2 text-blue-400">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contribution"
                >
                  Select Your Contribution *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contribution"
                  type="number"
                  placeholder="R 100"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                />

                <label
                  className="block mt-2 text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contribution"
                >
                  Wallet Address
                </label>
                <input
                  className="shadow appearance-none border mt-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="wallet_address"
                  type="text"
                  value={senderWalletUrl}
                  onChange={(e) => setSendingWalletAddressUrl(e.target.value)}
                  placeholder="https://ilp.rafiki.money/tshepo"
                />
                <button
                  onClick={handleSubmit}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Fund Now
                </button>

                {!responseOK && <p className="mt-4">{responseMessage}</p>}
                {responseOK && (
                  <div>
                    <button
                      className="bg-green-500 text-white w-full mt-2 p-2 rounded hover:bg-green-600"
                      onClick={handleRedirect}
                    >
                      Confirm Payment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-800">My Story</h2>
            <p className="mt-2 text-gray-600">
              My name is Khensile. I am a 5th year medical student at Sefako
              Makgatho Health Science University. I have managed to pass the
              past four years of my course with hard work and dedication and did
              not have to repeat any module/year. However, in my endeavor of
              working towards becoming a medical doctor, I am faced with
              financial struggles. I was funded by NSFAS for three years of my
              degree, from second year until 4th year. I currently have no
              funding because NSFAS has rejected my application for this
              year(2024). I have applied for several bursaries with no luck.
              Being a medical doctor has always been my dream since I was a
              child. Although it’s not easy, I am dedicated to my work and a
              hard worker. I am persistent and a firm believer in working
              towards my dreams. I am eager to learn and better myself. In the
              four years that I have completed my studies, I have learned a lot
              about myself. Besides being a hard worker and being dedicated to
              my work, I am a team player, I am patient, I enjoy working with
              people, and I am kind. I believe these are the qualities needed in
              someone who is on a path to becoming a doctor. Please help me
              become the medical doctor that I’ve always wanted to be.
              {/* Add the rest of the story content here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
