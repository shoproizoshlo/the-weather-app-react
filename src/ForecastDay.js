import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.date * 1000);
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
    <div className="col forecact-card">
      <div className="forecast-day">{day()}</div>
      <img src={props.data.iconUrl} className="weather-img" />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{props.data.maxTemp}</span>°
        | <span className="forecast-temperature">{props.data.minTemp}</span>°
      </div>
    </div>
  );
}
