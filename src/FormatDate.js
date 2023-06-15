import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  if (hour < 10) {
    return `0${hour}`;
  }
  if (minute < 10) {
    return `0${minute}`;
  }
  return `${day}  ${hour}:${minute}`;
}
