import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units-c">
          ⁰C |{" "}
          <a href="/" onClick={showF}>
            ⁰F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units-c">
          <a href="/" onClick={showC}>
            ⁰C{" "}
          </a>
          | ⁰F{" "}
        </span>
      </div>
    );
  }
}
