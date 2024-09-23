import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [weatherData, setWeatherData] = useState({ load: false });

  function displayWeatherData(response) {
    console.log(response.data);

    setWeatherData({
      load: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/811/original/sun.png?1695302792`,
    });
  }

  if (weatherData.load) {
    return (
      <div className="App container-fluid">
        <nav className="Navbar navbar">
          <div className="Location navbar-brand d-flex">
            <i className="fa-solid fa-location-dot LocationDot"></i>
            <h1>{props.defaultCity}</h1>
          </div>
          <form className="d-flex">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control me-2"
            ></input>
            <button className="btn btn-outline-light" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </nav>
        <div className="Main">
          <img src={weatherData.iconUrl} alt={weatherData.icon} />
          <span className="Temperature">{weatherData.temperature}</span>
          <span className="Units">°C | °F</span>
          <p className="Description">{weatherData.description}</p>
          <p className="LowHigh">
            humidity: {weatherData.humidity}% | wind: {weatherData.wind} km/h
          </p>
          <p>date | time updated</p>
        </div>
        <footer className="Footer">
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
    const apiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeatherData);
  }
}

export default App;
