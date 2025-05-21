import { BsSearch } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { TiWeatherWindy } from "react-icons/ti";
import { AiFillCloud } from "react-icons/ai";
import { useRef, useState } from "react";
import styles from "./Weather.module.css";
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  const cityNameElement = useRef();
  const [weatherData, setWeatherData] = useState("");
  async function changeCity() {
    try {
      const city = cityNameElement.current.value;
      if (city === "") {
        alert("Please enter city name");
        return;
      }
      cityNameElement.current.value = "";
      const apiKey = "823518edc4bac84c6f01daee967901fb";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(typeof data.cod);
      console.log(data.cod);
      console.log(data);
      if (data.cod == '404' || data.cod === '400') {
        alert("Please enter valid city name");
      } else {
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.weatherBlock}>
      <div className={styles.cityInput}>
        <FaMapLocationDot className={styles.locationIcon} />
        <input
          type="text"
          ref={cityNameElement}
          className={styles.inputName}
          placeholder="Enter city name.."
        />
        <button onClick={changeCity} className={styles.searchCity}>
          <BsSearch className={styles.searchIcon} />
        </button>
      </div>
      {console.log(weatherData)}
      {weatherData ? (
        <div className={styles.weatherBlockChild}>
          <div className={styles.cityName}>
            <h2>{weatherData.name}</h2>
          </div>
          <div className={styles.weatherIcon}>
            <WeatherIcon weatherData={weatherData}></WeatherIcon>
            <p>
              {weatherData.weather[0].description.charAt(0).toUpperCase() +
                weatherData.weather[0].description.slice(1)}
            </p>
          </div>
          <div className={styles.weatherInfoBlock}>
            <h1>{(weatherData.main.temp - 273).toFixed(0)}°C</h1>
            <div className={styles.weatherInfo}>
              <p>
                <FaTemperatureHigh />
                Feels Like :{" "}
                {Math.ceil((weatherData.main.temp - 273).toFixed(1))}°C
              </p>
              <p>
                <TiWeatherWindy />
                Wind : {weatherData.wind.speed.toFixed(1)} m/s
              </p>
              <p>
                <AiFillCloud />
                Cloudy : {weatherData.clouds.all}%
              </p>
              <p>
                {" "}
                <WiHumidity />
                Humidity : {weatherData.main.humidity}%
              </p>
              <p></p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Choose City</h2>
      )}
    </div>
  );
};

export default Weather;
