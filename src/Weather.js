import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherDetails({
      ready: true,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d5ccd512023748fb33c1fa7c1f597470";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherDetails.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City name ..."
                className="form-control"
                onChange={handleCity}
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
        <WeatherInfo data={weatherDetails} />
        <h2 className="daily-forecast-header">Daily Forecast</h2>
        <WeatherForecast
          coordinates={weatherDetails.coordinates}
          icons={weatherDetails.icon}
        />
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height={80}
        width={80}
        color="green"
        timeout={3000}
        className="spinner"
      />
    );
  }
}
