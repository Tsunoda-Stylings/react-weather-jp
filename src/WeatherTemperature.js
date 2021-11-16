import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="container WeatherTemperature">
        <div className="row temperature">{Math.round(props.celsius)}</div>
        <div className="col-sm unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container WeatherTemperature">
        <div className="row temperature">{Math.round(fahrenheit())}</div>
        <div className="col-sm unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
