import React from "react";
import Weather from "./Weather";
import "./App";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <Weather defaultCity="Fairfax" />
        <footer>
          This project was coded by Lilia Gashin and is
          <br />
          <a
            href="https://github.com/codinglil/weather-react2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
