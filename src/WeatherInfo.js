import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center m-2 text-capitalize">
        <div>
          <span className="city ps-2">{props.data.city}</span>
        </div>
        <div className="time">
          updated:{" "}
          <span>
            <FormatDate date={props.data.date} />
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mr-2 pe-2">
        <div className="d-flex align-items-center m-0">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-img"
          />
          <p className="d-inline m-0 location-weather">
            <span className="temp">{props.data.temperature}</span>{" "}
            <span className="item">C°</span>
          </p>
        </div>
        <div className="data mr-0 p-0">
          <ul className="data-list m-0 p-0">
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
