import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Search Engine</h1>
          <Weather />
          <footer>
            This project was coded by Lilia Gashin and is
            <br />
            <a
              href="https://github.com/codinglil/weather-react-app1"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
