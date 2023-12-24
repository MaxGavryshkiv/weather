import React from "react";
import styles from "./TimeList.module.css";

const TimeList = ({ list }) => {
  return (
    <div className={styles.scrollableContainer}>
      <ul className={styles.list}>
        {list.map((el) => (
          <li className={styles.listItem}>
            <span className={styles.time}>{el.time.split(" ").pop()} </span>
            <span className={styles.temp}>
              {el.temp_c.toString().split(".").shift()}°
            </span>
            <img
              className={styles.icon}
              src={el.condition.icon}
              alt="Weather Icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeList;
