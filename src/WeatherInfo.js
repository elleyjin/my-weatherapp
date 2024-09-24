import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Main">
      <img src={props.data.iconUrl} alt={props.data.icon} />
      <span className="Temperature">{props.data.temperature}</span>
      <span className="Units">°C | °F</span>
      <p className="Description">{props.data.description}</p>
      <div className="Condition">
        <span>
          <i className="fa-solid fa-droplet"></i> {props.data.humidity}%
        </span>{" "}
        <span>
          <i className="fa-solid fa-wind"></i> {props.data.wind} km/h
        </span>
        <span>
          <i className="fa-solid fa-temperature-half"></i> {props.data.feel}°C
        </span>
      </div>
      <FormattedDate date={props.data.date} />
    </div>
  );
}
