import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function setDay() {
    const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
    const date = new Date(props.forecast.time * 1000);
    const day = date.getDay();

    return days[day];
  }

  function minTemperature() {
    const temperature = Math.round(props.forecast.temperature.minimum);

    return temperature;
  }

  function maxTemperature() {
    const temperature = Math.round(props.forecast.temperature.maximum);

    return temperature;
  }

  return (
    <div>
      <div className="forecast-day">{setDay()}</div>
      <Icon
        className="forecast-icon"
        code={props.forecast.condition.icon}
        alt={props.forecast.description}
      />
      <div className="forecast-temperatures">
        <span className="min-temperature">{minTemperature()}° |</span>
        <span className="max-temperature"> {maxTemperature()}°</span>
      </div>
    </div>
  );
}
