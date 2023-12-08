import React from "react";
import styles from "./LocationSign.module.css";

export const LocationSign = ({ currentPlace }) => {
  return (
    <>
      <div className={styles.location_wrap}>{currentPlace}</div>
    </>
  );
};
