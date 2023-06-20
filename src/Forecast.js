import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast({
      maxTemp: Math.round(response.data.daily.temp.max),
      minTemp: Math.round(response.data.daily.temp.min),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.daily.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
    function day() {
      let day = new Date(response.data.daily.dt * 1000).getDay();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[day];
    }
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row forecast-row">
        <div className="col forecact-card">
          <div className="forecast-day">{day()}</div>
          <img src={forecast.iconUrl} className="weather-img" />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">{forecast.maxTemp}</span>
            ° | <span className="forecast-temperature">{forecast.minTemp}</span>
            °
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    console.log(apiUrlForecast);
    axios.get(apiUrlForecast).then(handleResponse);
    return "Loading...";
  }
}
