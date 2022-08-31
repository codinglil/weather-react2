import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="city-name">{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize pb-3">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="float-left current-img"
              src={props.data.icon}
              alt="weather-icon"
            />
            <div className="float-left">
              <WeatherTemp celsius={props.data.temp} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Country: {props.data.country}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
