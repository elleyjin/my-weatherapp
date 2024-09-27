import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [weatherData, setWeatherData] = useState({ load: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    setWeatherData({
      load: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      feel: Math.round(response.data.temperature.feels_like),
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
    });
    // console.log(response.data);
  }

  function search() {
    const apiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.load) {
    return (
      <div className="App container-fluid">
        <nav className="navbar">
          <div className="location navbar-brand d-flex">
            <i className="fa-solid fa-location-dot LocationDot"></i>
            <h1 className="text-lowercase">{weatherData.city}</h1>
          </div>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control me-2"
              onChange={updateCity}
            ></input>
            <button className="btn btn-outline-light" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </nav>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
        <footer className="footer">
          <p>
            <a
              href="https://github.com/elleyjin/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Chan Ee Lin/Elley Jin
          </p>
        </footer>
      </div>
    );
  } else {
    search();
  }
}

export default App;
