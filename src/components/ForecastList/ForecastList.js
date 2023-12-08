import styles from "./ForecastList.module.css";

export const ForecastList = ({ forecast }) => {
  console.log(forecast);

  return (
    <div>
      <ul className={styles.forecast_list}>
        <li className={styles.forecast_list_item}>
          <div className={styles.forecast_day}>Tomorrow </div>

          <img
            className={styles.forecast_icon}
            style={{
              backgroundImage: `url(${forecast.forecastday[1].day.condition.icon})`,
              backgroundSize: "35px",
            }}
            alt={`forecast icon ${forecast.forecastday[1].day.condition.text}`}
            src={forecast.forecastday[1].day.condition.icon}
          />

          <div className={styles.forecast_maxtemp}>
            <div
              className={
                forecast.forecastday[1].day.maxtemp_c < 0
                  ? styles.minus_accent
                  : ""
              }
            >
              {forecast.forecastday[1].day.maxtemp_c}°
            </div>
          </div>
          <div className={styles.forecast_mintemp}>
            <div
              className={
                forecast.forecastday[1].day.mintemp_c < 0
                  ? styles.minus_accent
                  : ""
              }
            >
              {forecast.forecastday[1].day.mintemp_c}°
            </div>
          </div>
        </li>
        <li className={styles.forecast_list_item}>
          <div className={styles.forecast_day}>Day after </div>
          <img
            className={styles.forecast_icon}
            style={{
              backgroundImage: `url(${forecast.forecastday[2].day.condition.icon})`,
              backgroundSize: "35px",
            }}
            alt={`forecast icon ${forecast.forecastday[2].day.condition.text}`}
            src={forecast.forecastday[2].day.condition.icon}
          />
          <div className={styles.forecast_maxtemp}>
            <div
              className={
                forecast.forecastday[2].day.maxtemp_c < 0
                  ? styles.minus_accent
                  : ""
              }
            >
              {forecast.forecastday[2].day.maxtemp_c}°
            </div>
          </div>
          <div className={styles.forecast_mintemp}>
            <div
              className={
                forecast.forecastday[2].day.mintemp_c < 0
                  ? styles.minus_accent
                  : ""
              }
            >
              {forecast.forecastday[2].day.mintemp_c}°
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
