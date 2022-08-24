import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2 className="city-name">New York</h2>
      <ul>
        <li>Wednesday 5:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          31⁰C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 70%</li>
            <li>Wind:15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
