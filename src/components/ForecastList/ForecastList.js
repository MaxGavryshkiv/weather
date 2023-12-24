import styles from "./ForecastList.module.css";

export const ForecastList = ({ forecast }) => {
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
            {forecast.forecastday[1].day.maxtemp_c}°
          </div>
          <div className={styles.forecast_mintemp}>
            {forecast.forecastday[1].day.mintemp_c}°
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
            {forecast.forecastday[2].day.maxtemp_c}°
          </div>
          <div className={styles.forecast_mintemp}>
            {forecast.forecastday[2].day.mintemp_c}°
          </div>
        </li>
      </ul>
    </div>
  );
};
