import axios from "axios";
let nextCityId = 0;

const WEATHER_API = {
  SERVER_URL: "https://api.openweathermap.org/data/2.5/weather",
  FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast",
  API_KEY: "f660a2fb1e4bad108d6160b7f58c555f",
};

const URL = `${WEATHER_API.SERVER_URL}?appid=${WEATHER_API.API_KEY}`;
const URL_FORECAST = `${WEATHER_API.FORECAST_URL}?appid=${WEATHER_API.API_KEY}`;

export const addCity = (city) => {
  return { type: "ADD_CITY", city, id: nextCityId++ };
};

export const deleteCity = (id) => {
  return { type: "DELETE_CITY", id: id };
};

export const getWeather = (location = "Kiev") => {
  return (dispatch) => {
    dispatch(getWeatherPending());
    dispatch(getForcastPending());
    axios
      .get(URL, {
        params: {
          q: location,
        },
      })
      .then((res) => {
        dispatch(getWeatherSuccess(res));
      });

    axios
      .get(URL_FORECAST, {
        params: {
          q: location,
        },
      })
      .then((res) => {
        dispatch(getForcastSuccess(res));
      });
  };
};

const getWeatherPending = () => {
  return {
    type: "GET_WEATHER_PENDING",
  };
};

const getWeatherSuccess = (data) => {
  return {
    type: "GET_WEATHER_SUCCESS",
    payload: data,
  };
};

const getWeatherRejected = () => {
  return {
    type: "GET_WEATHER_REJECTED",
  };
};
const getForcastPending = () => {
  return {
    type: "GET_FORCAST_PENDING",
  };
};

const getForcastSuccess = (data) => {
  return {
    type: "GET_FORCAST_SUCCESS",
    payload: data,
  };
};

const getForcastRejected = () => {
  return {
    type: "GET_FORCAST_REJECTED",
  };
};
