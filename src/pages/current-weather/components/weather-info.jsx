import React, { useState } from "react";
import "./weather-info.scss";
import { GoLocation } from "react-icons/go";

import * as PropTypes from "prop-types";
WeatherInfo.propTypes = {
  weatherData: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      }).isRequired
    ),
  }),
  placeName: PropTypes.string.isRequired,
};

export default function WeatherInfo({ weatherData, placeName }) {
  const temperature = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const minTemp = weatherData.main.temp_min;
  const maxTemp = weatherData.main.temp_max;
  const windSpeed = weatherData.wind.speed;
  const icon = weatherData.weather[0].icon;

  const [isCelsius, setIsCelsius] = useState(false);
  const [isKm, setIsKm] = useState(false);

  const tempToCelsius = (temperatureInF) => {
    return parseInt(((temperatureInF - 32) / 1.8).toFixed(1));
  };

  const windToKm = (windInMph) => {
    return (windInMph * 1.609).toFixed(1);
  };
  const renderWind = (windInMph) => {
    const windSpeed = Math.round(windInMph);
    return isKm ? `${windToKm(windSpeed)} km/h` : `${windSpeed} mph`;
  };

  const toggleFormat = () => {
    setIsCelsius(!isCelsius);
    setIsKm(!isKm);
  };

  const renderTemp = (tempInF) => {
    const temp = Math.round(tempInF);
    return isCelsius ? `${tempToCelsius(temp)}°C` : `${temp}°F`;
  };

  return (
    <div className="show-weather-container">
      <div className="title-icon-wrapper">
        <div className="temperature-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
        <div className="temperature-title">{renderTemp(temperature)}</div>
      </div>
      <div className="forecast-details-wrapper">
        <div className="user-location">
          <GoLocation className="place-name-icon" /> {placeName}
        </div>

        <div className="additional-data">
          <div>Wind: {renderWind(windSpeed)}</div>
          <div>Max temp: {renderTemp(maxTemp)}</div>
        </div>
        <div className="additional-data">
          <div>Feels like: {renderTemp(feelsLike)}</div>
          <div>Min temp: {renderTemp(minTemp)}</div>
        </div>
        <button className="convertor-button" onClick={toggleFormat}>
          Convert to
          {isCelsius ? "°F" : "°C"}
        </button>
      </div>
    </div>
  );
}
