export default class OneTimePayments {
  static async startRecurringPayment(
    senderWalletUrl,
    contribution,
    studentURL,
    studentID,
    setCONTINUE_ACCESS_TOKEN,
    setCONTINUE_URI,
    setQUOTE_URL,
    setINTERACT_URL,
    setResponseMessage,
    setResponseOk
  ) {
    localStorage.clear();
    try {
      setWaitingForResponse(true);
      const response = await fetch(
        "http://localhost:3040/start_recurring_payments",
        {
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
        }
      );

      const data = await response.json();
      console.log(data);
      setWaitingForResponse(false);
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

        setResponseOk(false);
      }
    } catch (error) {
      setResponseOk(false);
      setResponseMessage(`Error: ${error.message}`);
    }
  }

  static async finishRecurringPayment(interactRefParam, senderWalletUrl) {
    const data = {
      quoteUrl: localStorage.getItem("QUOTE_URL"),
      continueUri: localStorage.getItem("CONTINUE_URI"),
      continueAccessToken: localStorage.getItem("CONTINUE_ACCESS_TOKEN"),
      interactRef: interactRefParam,
      sendingWalletAddressUrl: senderWalletUrl,
      msg: "Thanks for donating Lungile, I won't let you down Lungile",
    };

    try {
      const response = await fetch(
        "http://localhost:3040/finish_recurring_payments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
  }
}
