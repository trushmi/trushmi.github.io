import React, { useState } from "react";
import WeatherInfo from "./components/weather-info";
import "./current-weather.scss";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";

export default function CurrentWeather() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState("");

  const getWeatherUrl = (lat, lon) => {
    return `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ba387a944d8e36793cf42771b0f9482e&lat=${lat}&lon=${lon}&units=imperial`;
  };

  const getWeather = async (placeId) => {
    setIsLoading(true);
    try {
      const results = await geocodeByPlaceId(placeId);
      const { lat, lng } = await getLatLng(results[0]);
      console.log("Successfully got latitude and longitude", { lat, lng });
      const response = await fetch(getWeatherUrl(lat, lng));
      const data = await response.json();
      setWeatherData(data.list.length > 0 ? data.list[0] : null);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onAutocompleteChange = (result) => {
    console.log("result", result);
    getWeather(result.value.place_id);
    setPlace(result.label);
  };
  return (
    <div className="forecast-wrapper">
      <div className="background"></div>
      <div className="forecast-container">
        <div className="forecast-titile">Weather forecast:</div>
        <div className="autocomplete-container">
          <GooglePlacesAutocomplete
            apiKey="AIzaSyDQ3RvDL24mcs0JKKj9aH9gQpSpTbwOTpE"
            selectProps={{
              value: null,
              onChange: onAutocompleteChange,
              placeholder: "Select the city...",
              noOptionsMessage: () => null,
              styles: {
                control: (provided) => ({
                  ...provided,
                  borderStyle: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "none",
                  "&:focus": {
                    boxShadow: "none",
                  },
                }),

                option: (provided) => ({
                  ...provided,
                  color: "black",
                  textAlign: "left",
                  cursor: "pointer",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
              },
            }}
          />
        </div>
        <div className="loading">{isLoading && "Loading ... "}</div>
        {weatherData && (
          <WeatherInfo weatherData={weatherData} placeName={place} />
        )}
      </div>
    </div>
  );
}
