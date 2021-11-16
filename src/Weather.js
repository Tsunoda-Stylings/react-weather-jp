import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <div className="Weather">
            <header>今日の天気予報</header>
            <h1>{weatherData.city}</h1>
            <small class="player">
              <iframe
                src="https://open.spotify.com/embed/playlist/6ouFe7c2VyLtHUcq3uIguP?theme=0"
                width="30%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="jsx-a11y/iframe-has-title"
              ></iframe>
            </small>
            <div className="container">
              <WeatherInfo data={weatherData} />
              <WeatherForecast coord={weatherData.coord} />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="search-form mb-3">
          <div className="d-flex justify-content-center">
            <input
              type="search"
              className="search"
              placeholder="あなたの市に入ってください！"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
              value={city}
            />
            <button type="submit" className="btn btn-primary">
              探す
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
