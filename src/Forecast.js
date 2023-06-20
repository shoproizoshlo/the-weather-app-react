import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast({
      maxTemp: Math.round(response.data.daily[0].temp.max),
      minTemp: Math.round(response.data.daily[0].temp.min),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      date: response.data.daily[0].dt,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row forecast-row">
        <ForecastDay data={forecast} />
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
