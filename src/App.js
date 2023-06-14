import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div classNameName="App">
      <div className="card">
        <Weather />
      </div>
      <footer className="d-flex justify-content-center m-1">
        <small className="github-link">
          Created by Sue Brechko. See you on{" "}
          <a
            href="https://github.com/shoproizoshlo/the-weather-project"
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
