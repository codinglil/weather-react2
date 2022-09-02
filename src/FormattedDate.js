import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
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
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours === 0 && hours < 12) {
    return (
      <div>
        {day} {hours}:{minutes} am
      </div>
    );
  } else {
    return (
      <div>
        {day} {hours}:{minutes} pm
      </div>
    );
  }
}
