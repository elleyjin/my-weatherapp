import React, { useState } from "react";
import Icon from "./Icon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [load, setLoad] = useState(false);

  function displayForecast(response) {
    // console.log(response.data.daily);
    setDailyForecast(response.data.daily);
    setLoad(true);
  }

  function apiSearch() {
    const apiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;
    const lon = props.data.coordinates.longitude;
    const lat = props.data.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
  }

  if (load) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">fri</div>
            <Icon
              className="forecast-icon"
              code={props.data.icon}
              alt={props.data.description}
            />
            <div className="forecast-temperatures">
              <span className="min-temperature">
                {dailyForecast[0].temperature.minimum}° |
              </span>
              <span className="max-temperature"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    apiSearch();
  }
}
