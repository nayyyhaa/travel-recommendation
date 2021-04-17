import "./styles.css";
import { useState } from "react";
import destinationsDB from "./destination";
export default function App() {
  let destinations = Object.keys(destinationsDB);
  let [places, setPlaces] = useState("Delhi");

  function btnHandler(destination) {
    setPlaces(destination);
  }

  return (
    <div>
      <nav>🎑Travel Along🎑</nav>
      <p id="text">
        This is a vacation destination recommendation app in India.
      </p>
      {destinations.map((destination) => (
        <button
          className="button"
          onClick={() => btnHandler(destination)}
          key={destination}
        >
          {" "}
          {destination}{" "}
        </button>
      ))}
      <div className="selectedPlace">{places}</div>
      <ul>
        {destinationsDB[places].map((place) => (
          <div className="content">
            <div className="placeName">{place.name}</div>
            <div className="placeDescp">
              <strong>Description: </strong>
              {place.description}
            </div>
          </div>
        ))}
      </ul>
      <footer>
        <p>
          more games <a href="https://nehagupta.netlify.com">@nehaland</a>
        </p>
      </footer>
    </div>
  );
}
