import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Weather defaultCity="Vienna" />
      </div>
      <footer className="d-flex justify-content-center m-1">
        <small className="github-link">
          Created by Sue Brechko. See you on{" "}
          <a
            href="https://github.com/shoproizoshlo/the-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </small>
      </footer>
    </div>
  );
}
