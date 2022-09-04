import React from "react";
import styles from "./Details.module.css";

const Details = ({ weather }) => {
  return (
    <div className={styles.Details}>
      <h1 className="details__city">{weather.data.CITY}</h1>
      <p className="details__temperature">
        Temperature:{" "}
        <span className="details_temp">{weather.data.TEMPERATURE}</span>
      </p>
      <p className="details__feels">
        Feels like:{" "}
        <span className="details_feels">{weather.data.FEELS_LIKE}</span>
      </p>
      <p className="details__weather">
        Weather: <span className="details_weather">{weather.data.WEATHER}</span>
      </p>
      <p className="details__sunrise">
        Sunrise: <span className="details_sunrise">{weather.data.SUNRISE}</span>
      </p>
      <p className="details__sunser">
        Sunset: <span className="details_sunset">{weather.data.SUNSET}</span>
      </p>
    </div>
  );
};

export default Details;
