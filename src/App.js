import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <nav className="Navbar navbar">
        <div className="Location navbar-brand">
          <h1>New York</h1>
        </div>
        <form className="d-flex">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control me-2"
          ></input>
          <button className="btn btn-outline-light">Search</button>
        </form>
      </nav>
      <div className="Main">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/811/original/sun.png?1695302792"
          alt="weather-icon"
        />
        <span className="Temperature">27</span>
        <span className="Units">°C | °F</span>
        <p className="LowHigh">
          <strong>l: | h: </strong>
        </p>
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
}

export default App;
