import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const API_URI =
  process.env.NODE_ENV === "development"
    ? "http://0.0.0.0:8000/api"
    : "https://movienightfight.herokuapp.com/api";

function App() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${API_URI}/hello`);
        const data = await response.json();
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    }

    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
