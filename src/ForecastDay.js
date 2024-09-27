import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function setDay() {
    const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
    const date = new Date(props.forecast[0].time * 1000);
    const day = date.getDay();

    return days[day];
  }

  function minTemperature() {
    const temperature = Math.round(props.forecast[0].temperature.minimum);

    return temperature;
  }
  function maxTemperature() {
    const temperature = Math.round(props.forecast[0].temperature.maximum);
    console.log(props.forecast);

    return temperature;
  }

  return (
    <div>
      <div className="forecast-day">{setDay()}</div>
      <Icon
        className="forecast-icon"
        code={props.forecast[0].condition.icon}
        alt={props.forecast[0].description}
      />
      <div className="forecast-temperatures">
        <span className="min-temperature">{minTemperature()}° |</span>
        <span className="max-temperature"> {maxTemperature()}°</span>
      </div>
    </div>
  );
}
