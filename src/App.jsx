import React, { useRef, useState } from "react";
import Input from "./components/Input/Input";
import "./App.css";

let App = () => {
  let inputRef = useRef(null);
  let [message, setMessage] = useState("");
  let handleSubmit = () => {
    let name = inputRef.current.value.trim();
    if (name) {
      setMessage(`Hello, ${name}! Welcome to our app.`);
    } else {
      setMessage("Please enter your name.");
    }
    inputRef.current.value = "";
  };

  return (
    <div className="app-container">
      <h1>Enter Your Name</h1>
      <div className="input-container">
        <Input ref={inputRef} />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
