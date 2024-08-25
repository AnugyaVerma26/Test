import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [postResponse, setPostResponse] = useState(null);
  const [getResponse, setGetResponse] = useState(null);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        full_name: fullName,
        dob: dob,
        data: data.split(","),
        email_id: email,
        roll_number: rollNumber,
      };

      const response = await axios.post(
        "https://your-api-endpoint.com/bfhl",
        requestData
      );

      setPostResponse(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const handleGetRequest = async () => {
    try {
      const response = await axios.get("https://your-api-endpoint.com/bfhl");
      setGetResponse(response.data);
    } catch (error) {
      console.error("Error making GET request:", error);
    }
  };

  return (
    <div className="App">
      <h1>REST API Client</h1>

      <form onSubmit={handlePostSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth (ddmmyyyy): </label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label>Data (comma separated): </label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div>
          <label>Email ID: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Roll Number: </label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit </button>
      </form>

      {postResponse && (
        <div>
          <h2>POST Response</h2>
          <pre>{JSON.stringify(postResponse, null, 2)}</pre>
        </div>
      )}

      {/* <button onClick={handleGetRequest}>Trigger GET Request</button> */}

      {/* {getResponse && (
        <div>
          <h2>GET Response</h2>
          <pre>{JSON.stringify(getResponse, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}

export default App;


