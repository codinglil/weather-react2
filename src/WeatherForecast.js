import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "d5ccd512023748fb33c1fa7c1f597470";
  //let forecastIcon = props.daily[1].weather[0].icon;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
          <div className="forecast-day">MON</div>
          <div className="forecast-icon">🌧</div>
          <div className="forecast-temp">
            <span className="forecast-temp-max">20⁰</span>
            <span className="forecast-temp-min">10⁰</span>
          </div>
        </div>
      </div>
    </div>
  );
}
