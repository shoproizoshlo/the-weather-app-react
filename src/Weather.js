import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
  }
  let city = "Vienna";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=8o1cbc3a4633c4682d91b0f2bft25894&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="card-body">
      <form action="search">
        <div className="form-search">
          <input
            type="text"
            placeholder="City"
            className="m-0 city-input"
            required
          />
          <input type="submit" value="Search" className="search-button" />
          <input
            type="button"
            value="Local"
            className="search-button"
            id="local-button"
          />
        </div>
      </form>
      <div className="row headline">
        <div className="col-6">
          <span className="city" id="city">
            Vienna
          </span>
        </div>
        <div className="col-6 time">
          Updated: <span id="time">Monday 21:32</span>
        </div>
      </div>
      <div className="weather-data">
        <div className="container weather">
          <div className="row weather-row">
            <img
              src={weather.iconUrl}
              alt={weather.description}
              className="weather-img"
            />
            <div className="col-6 location-weather">
              <span id="temp-num" classNameName="location">
                {weather.temperature}
              </span>{" "}
              <span className="temp-units">
                <a href="/" id="celsius-link" className="temp active">
                  C°
                </a>{" "}
                |{" "}
                <a href="/" id="fahrenheit-link" className="temp active">
                  F°
                </a>
              </span>
            </div>
            <div className="col-6 data">
              <ul className="data-list">
                <li className="data-row" id="description">
                  {weather.description}
                </li>
                <li className="data-row">
                  Wind: <span>{weather.wind}</span> km/h
                </li>
                <li className="data-row">
                  Humidity: <span>{weather.humidity}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
