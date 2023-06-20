import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function icon() {
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${iconUrl}`;
  }
  function temperatureMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function temperatureMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
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
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <img
        src={icon()}
        alt={props.data.weather[0].description}
        className="weather-img"
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{temperatureMax()}</span>° |{" "}
        <span className="forecast-temperature">{temperatureMin()}</span>°
      </div>
    </div>
  );
}
