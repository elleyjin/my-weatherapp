import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a
            href="/"
            onClick={showFarenheit}
            className={unit === "celsius" ? "inactive" : "active"}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="units">
          <a
            href="/"
            onClick={showCelsius}
            className={unit === "farenheit" ? "inactive" : "active"}
          >
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
