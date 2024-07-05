import React , {useState} from "react";
import SearchBar from "./Components/Search-bar";
import WeatherCard from "./Components/WeatherCard";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;


  const fetchWeatherData = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  };


  return (
    <div >
      <SearchBar fetchWeatherData={fetchWeatherData} />
      { weatherData && <WeatherCard weatherData={weatherData}  />}
    </div>
  );
}

export default App;