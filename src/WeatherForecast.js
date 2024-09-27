import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [load, setLoad] = useState(false);

  function displayForecast(response) {
    setDailyForecast(response.data.daily);
    setLoad(true);
  }

  useEffect(() => {
    setLoad(false);
  }, [props.data.coordinates]);

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
          {dailyForecast.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay forecast={day} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    apiSearch();
  }
}
