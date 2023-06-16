import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  useEffect(() => {
    let city = "Vienna";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f8e93f00107773f88eafd933ce86b7&units=metric`;
    axios.get(apiURL).then(handleApi);
  }, []);

  function handleApi(response) {
    console.log(response.data, "response");
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  return (
    <div className="card-body p-0">
      <form action="search" id="search" onSubmit={handleApi}>
        <div className="form-search d-flex align-items-center justify-content-between m-1">
          <input
            type="text"
            placeholder="City"
            className="ps-3 city-input"
            id="cityInput"
            required
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
            id="searchButton"
          />
          <input
            type="button"
            value="Local"
            className="search-button"
            id="searchButton"
          />
        </div>
      </form>
      <div className="d-flex justify-content-between align-items-center m-2 text-capitalize">
        <div>
          <span className="city ps-2">{weather.city}</span>
        </div>
        <div className="time">
          updated: <span></span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mr-2 pe-2">
        <div className="d-flex align-items-center m-0">
          <img
            src={weather.iconUrl}
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
