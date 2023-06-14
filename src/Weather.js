import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="card-body">
      <form action="search" id="search-form">
        <div className="form-search">
          <input
            type="text"
            id="input-city"
            placeholder="City"
            className="city-input"
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
            <div className="col-6 location-weather">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="Partly cloudy"
                className="weather-img"
                id="weather-img"
              />
              <span id="temp-num" classNameName="location">
                41
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
                  Temno
                </li>
                <li className="data-row">
                  Wind: <span id="speed">100</span> km/h
                </li>
                <li className="data-row">
                  Humidity: <span id="humidity">100</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
