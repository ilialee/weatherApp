import React from "react";
import Calendar from "./Calendar";
import styles from "./Forcast.module.css";

const Forcast = () => {
  // let element = forcast.map((obj) => {
  //   return (
  //     <Calendar
  //       key={Math.random()}
  //       data={obj.dt_txt.slice(0, 10)}
  //       time={obj.dt_txt.slice(11, 16)}
  //       temp={Math.round(obj.main.temp - 273.15)}
  //       src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@4x.png`}
  //       feelslike={Math.round(obj.main.feels_like - 273.15)}
  //     />
  //   );
  // });

  return (
    <div className={styles.Forcast}>
      {/* <h1 className={styles.forcastCity}>Kremenchug</h1>
      {element} */}
    </div>
  );
};

export default Forcast;
