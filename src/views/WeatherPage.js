import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/WeatherPage.module.css";
import sprite from "../assets/sprite.svg";
import TimeList from "../components/TimeList/TimeList";
import { LocationSign } from "../components/LocationSign/LocationSign";
import { TodayWeatherInfo } from "../components/TodayWeatherInfo/TodayWeatherInfo.js";
import { ForecastList } from "../components/ForecastList/ForecastList.js";
function WeatherPage() {
  const [weatherData, setWeatherData] = useState(
    JSON.parse(localStorage.getItem("weatherData"))
  );
  const [weatherForecastList, setWeatherForecastList] = useState([]);
  const navigate = useNavigate();
  const currentTime = weatherData.location.localtime;

  useEffect(() => {
    if (currentTime && weatherData.forecast.forecastday) {
      const index = Number(currentTime.replace(/...$/, "").split(" ").pop());
      const firstArr = weatherData.forecast.forecastday[0].hour.slice(index);
      const secondArr = weatherData.forecast.forecastday[1].hour.slice(
        0,
        index + 1
      );
      setWeatherForecastList([...firstArr, ...secondArr]);
    }
  }, [currentTime, weatherData]);

  return (
    <>
      <div className={styles.weather_page__wrap}>
        <div className={styles.sidebar__wrap}>
          <button
            className={styles.go_back_button}
            onClick={() => {
              navigate("/");
            }}
          >
            <svg className={styles.go_back_button_svg}>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </button>
          <div className={styles.time_list__wrap}>
            <TimeList list={weatherForecastList} />
          </div>
        </div>
        <div className={styles.right_bar_wrap}>
          <div className={styles.location__wrap}>
            <LocationSign currentPlace={weatherData.location.name} />
          </div>
          <div className={styles.forecast_wrap}>
            <ForecastList forecast={weatherData.forecast} />
          </div>
          <div>
            {weatherForecastList[0] && (
              <TodayWeatherInfo
                currentWeatherInfo={weatherForecastList[0]}
                todayAstroWeatherInfo={
                  weatherData.forecast.forecastday[0].astro
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
