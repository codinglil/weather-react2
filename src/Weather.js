import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });

  function handleResponse(response) {
    console.log(weatherDetails);
    setWeatherDetails({
      ready: true,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherDetails.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City name ..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <h2 className="city-name">{props.defaultCity}</h2>
        <ul>
          <li>
            <FormattedDate date={weatherDetails.date} />
          </li>
          <li className="text-capitalize">{weatherDetails.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                className="float-left"
                src={weatherDetails.icon}
                alt="weather-icon"
              />
              <div className="float-left">
                <span className="temp">{Math.round(weatherDetails.temp)}</span>
                <sapn className="units-c">⁰C</sapn>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherDetails.humidity}%</li>
              <li>Wind: {Math.round(weatherDetails.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d5ccd512023748fb33c1fa7c1f597470";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
