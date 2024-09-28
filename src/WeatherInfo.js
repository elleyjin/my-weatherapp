import React from "react";
import Icon from "./Icon";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div className="Main">
      <Icon code={props.data.icon} alt={props.data.description} />
      <UnitConversion celsius={props.data.temperature} />
      <p className="description">{props.data.description}</p>
      <div className="weather-condition">
        <span>
          <i className="fa-solid fa-wind"></i> {props.data.wind}km/h
        </span>
        <span>
          <i className="fa-solid fa-temperature-half"></i> {props.data.feel}°C
        </span>
      </div>
      <FormattedDate date={props.data.date} />
    </div>
  );
}
