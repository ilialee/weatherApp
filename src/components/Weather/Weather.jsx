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
  console.log(props);
  // debugger;
  // const [forcast, setForcast] = React.useState([
  //   {
  //     clouds: "",
  //     all: 39,
  //     dt: 1659603600,
  //     dt_txt: "2022-08-04 09:00:00",
  //     main: {
  //       feels_like: 301.18,
  //       grnd_level: 1013,
  //       humidity: 47,
  //       pressure: 1014,
  //       sea_level: 1014,
  //       temp: 300.99,
  //       temp_kf: 0,
  //       temp_max: 300.99,
  //       temp_min: 300.99,
  //     },
  //     pop: 0,
  //     sys: "",
  //     pod: "d",
  //     visibility: 10000,
  //     weather: [{ icon: "" }],
  //   },
  // ]);
  // const WEATHER_API = {
  //   SERVER_URL: "https://api.openweathermap.org/data/2.5/weather",
  //   FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast",
  //   API_KEY: "f660a2fb1e4bad108d6160b7f58c555f",
  // };
  // const URL = `${WEATHER_API.SERVER_URL}?q=${cityName}&appid=${WEATHER_API.API_KEY}`;
  // const URL_FORECAST = `${WEATHER_API.FORECAST_URL}?q=${cityName}&appid=${WEATHER_API.API_KEY}`;

  // React.useEffect(() => {
  // fetch(URL)
  //   .then((data) => {
  //     return data.json();
  //   })
  //   .then((data) => {
  //     let WEATHER_DATA = {};
  //     WEATHER_DATA.ICON = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  //     WEATHER_DATA.CITY = cityName;
  //     WEATHER_DATA.WEATHER = data.weather[0].main;
  //     WEATHER_DATA.TEMPERATURE = Math.round(data.main.temp - 273.15);
  //     WEATHER_DATA.FEELS_LIKE = Math.round(data.main.feels_like - 273.15);
  //     WEATHER_DATA.TIME = convertTime(data.timezone);
  //     WEATHER_DATA.DATE = convertDate(data.dt);
  //     WEATHER_DATA.SUNRISE = convertTime(data.sys.sunrise);
  //     WEATHER_DATA.SUNSET = convertTime(data.sys.sunset);
  //     setData(WEATHER_DATA);
  //   });

  // fetch(URL_FORECAST)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) => {
  //     setForcast(res.list);
  //   });
  // }, [cityName]);

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
