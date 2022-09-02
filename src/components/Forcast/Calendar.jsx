import React from 'react';
import styles from './Forcast.module.css';

const Calendar = ({ data, time, temp, src, feelslike }) => {
  return (
    <div className={styles.Calendar}>
      <div className={styles.forcastWrapper}>
        <div className={styles.box}>
          <p className={styles.forecastDate}>{data}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.forecastTime}>{time}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.forcastTemperature}>{temp}</p>
          <p className={styles.forcastFeelslike}>Feelslike {feelslike} °</p>
        </div>
        <div className={styles.box}>
          <p className={styles.forcastWeatherName}></p>
          <img className={styles.forcastIcon} src={src} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
