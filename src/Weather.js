import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.city,
      date: "monday 21:32",
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
    <div className="card-body p-0">
      <form action="search">
        <div className="form-search d-flex align-items-center justify-content-between m-1">
          <input
            type="text"
            placeholder="City"
            className="ps-3 city-input"
            required
          />
          <input type="submit" value="Search" className="search-button" />
          <input type="button" value="Local" className="search-button" />
        </div>
      </form>
      <div className="d-flex justify-content-between align-items-center m-2 text-capitalize">
        <div>
          <span className="city ps-2">{weather.city}</span>
        </div>
        <div className="time">
          updated: <span>{weather.date}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mr-2 pe-2">
        <div className="d-flex align-items-center m-0">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt={weather.description}
            className="weather-img"
          />
          <p className="d-inline m-0 location-weather">
            <span className="temp">{weather.temperature}</span>{" "}
            <span className="item">C°</span>
          </p>
        </div>
        <div className="data mr-0 p-0">
          <ul className="data-list m-0 p-0">
            <li className="text-capitalize">{weather.description}</li>
            <li>
              Wind: <span>{weather.wind}</span> km/h
            </li>
            <li>
              Humidity: <span>{weather.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
