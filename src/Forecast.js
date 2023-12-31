import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(handleResponse);
    return "Loading...";
  }
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="row forecast-row justify-content-between">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div
                className="col-sm-2 justify-content-center p-0 m-1 forecact-card"
                key={index}
              >
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
  }
}
