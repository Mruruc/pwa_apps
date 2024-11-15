import { useContext, useEffect, useState } from "react";
import getWeather from "../api/api-calls";
import WeatherCard from "./WeatherCard";
import SettingContext from "../context/SettingContext";
import { getUserLocation } from "../services/locationService";
import { checkTrashHold } from "../services/notificationService";

const Weather = () => {
  const { trashHold } = useContext(SettingContext);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((result) => {
        const { latitude, longitude } = result;
        fetchWeather(latitude, longitude);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    trashHold && checkTrashHold(weather?.main.temp, trashHold);
  }, [weather, trashHold]);

  const fetchWeather = (lat, lon) => {
    getWeather(lat, lon)
      .then((response) => {
        setWeather(response);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      {loading && <p className="text-pri">Loading weather data...</p>}
      {isError && <p className="text-danger fs-3">{isError}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};
export default Weather;
