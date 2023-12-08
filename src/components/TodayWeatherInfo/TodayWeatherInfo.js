import styles from "./TodayWeatherInfo.module.css";

export const TodayWeatherInfo = ({
  currentWeatherInfo,
  todayAstroWeatherInfo,
}) => {
  return (
    <div className={styles.today_weather_info_wrap}>
      <h2 className={styles.component_title}>Today</h2>
      <div className={styles.weather_main_info_wrap}>
        <div className={styles.weather_info_field}>
          Sunrise
          <p className={styles.weather_info_field_value}>
            {todayAstroWeatherInfo.sunrise}
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Sunset
          <p className={styles.weather_info_field_value}>
            {todayAstroWeatherInfo.sunset}
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Chance of precipitation
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.chance_of_rain > 0
              ? currentWeatherInfo.chance_of_rain
              : currentWeatherInfo.chance_of_snow}
            %
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Humidity
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.humidity}%
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Wind
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.wind_kph} KPH
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Feels like
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.feelslike_c}°C
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Precipitation
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.precip_mm} mm
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Pressure
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.pressure_mb} hPa
          </p>
        </div>
        <div className={styles.weather_info_field}>
          Visibility
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.vis_km} km
          </p>
        </div>
        <div className={styles.weather_info_field}>
          UV Index
          <p className={styles.weather_info_field_value}>
            {currentWeatherInfo.uv}
          </p>
        </div>
      </div>
    </div>
  );
};
