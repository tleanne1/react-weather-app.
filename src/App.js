import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://portfolio-tleanne.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Tracey Buentello
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/tleanne1/react-weather-app."
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a
            href="https://react-weather-app-tleanne.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
