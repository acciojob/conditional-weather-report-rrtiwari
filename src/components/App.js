
import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/App.css"

function App() {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;

