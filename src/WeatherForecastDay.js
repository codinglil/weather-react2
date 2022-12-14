import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}⁰`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}⁰`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }
  function icon() {
    let forecastIcon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${forecastIcon}`;
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img className="forecast-img" src={icon()} alt="icon" />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
