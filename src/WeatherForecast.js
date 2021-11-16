import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [data, setData] = useState(null);

  useEffect(() => {
    setForecastReady(false);
  }, [props.coord]);

  function handleResponse(response) {
    setData(response.data.daily);
    setForecastReady(true);
  }

  function load() {
    let apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ja`;

    axios.get(apiURL).then(handleResponse);
  }

  if (forecastReady) {
    return (
      <div className="WeatherForecast mt-3 mb-3">
        <div className="row">
          {data.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
