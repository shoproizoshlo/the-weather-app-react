import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handlePosition(position) {
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let positionApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(positionApiUrl).then(handleApi);
  }
  function navigatorLocal(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function search() {
    const apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleApi);
  }

  function handleApi(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="card-body p-0">
        <form action="search" id="search" onSubmit={handleSubmit}>
          <div className="form-search d-flex align-items-center justify-content-between m-1">
            <input
              onChange={handleCityChange}
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
              onClick={navigatorLocal}
              type="button"
              value="Local"
              className="search-button"
              id="searchButton"
            />
          </div>
        </form>
        <WeatherInfo data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
