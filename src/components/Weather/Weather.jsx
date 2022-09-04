import React from "react";
import styles from "./Weather.module.css";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import VisibleCitiesList from "../../containers/VisibleCitiesList";

const Weather = (props) => {
  React.useEffect(() => {
    props.getWeather();
  }, []);

  return (
    <div className={styles.Weather}>
      <Input getWeather={props.getWeather} />
      <div className={styles.content}>
        <div className={`${styles.contentItem} ${styles.contentItemMain}`}>
          <Main weather={props.weather} forcast={props.forcast} />
          <Navbar />
        </div>
        <div className={`${styles.contentItem} ${styles.contentItemLocation}`}>
          <VisibleCitiesList />
        </div>
      </div>
    </div>
  );
};

export default Weather;
