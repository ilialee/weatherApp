const WeatherInitialState = {
  weatherToday: {
    data: {
      ICON: "",
      CITY: "",
      WEATHER: "",
      TEMPERATURE: "",
      FEELS_LIKE: "",
      TIME: "",
      DATE: "",
      SUNRISE: "",
      SUNSET: "",
    },
    loading: false,
    error: false,
    success: false,
  },
  weatherForcast: {
    data: { key: "", data: "", time: "", temp: "", src: "", feels_like: "" },
    loading: false,
    error: false,
    success: false,
  },
};

const weatherReducer = (state = WeatherInitialState, action) => {
  switch (action.type) {
    case "GET_WEATHER_PENDING":
      return {
        ...state,
        weatherToday: {
          ...state.weatherToday,
          loading: true,
        },
      };
    case "GET_WEATHER_SUCCESS":
      return {
        ...state,
        weatherToday: {
          ...state.weatherToday,
          loading: false,
          success: true,
          data: {
            ICON: `https://openweathermap.org/img/wn/${action.payload.data.weather[0].icon}@4x.png`,
            CITY: action.payload.data.name,
            WEATHER: action.payload.data.weather[0].main,
            TEMPERATURE: Math.round(action.payload.data.main.temp - 273.15),
            FEELS_LIKE: Math.round(
              action.payload.data.main.feels_like - 273.15
            ),
            TIME: convertTime(action.payload.data.timezone),
            DATE: convertDate(action.payload.data.dt),
            SUNSET: convertTime(action.payload.data.sys.sunset),
            SUNRISE: convertTime(action.payload.data.sys.sunrise),
          },
        },
      };
    case "GET_WEATHER_REJECTED":
      return {
        ...state,
        weatherToday: {
          ...state.weatherToday,
          error: true,
        },
      };
    case "GET_FORCAST_PENDING":
      return {
        ...state,
        weatherForcast: {
          ...state.weatherForcast,
          loading: true,
        },
      };
    case "GET_FORCAST_SUCCESS":
      return {
        ...state,
        weatherForcast: {
          ...state.weatherForcast,
          loading: false,
          success: true,
          data: action.payload.data,
        },
      };
    case "GET_FORCAST_REJECTED":
      return {
        ...state,
        weatherForcast: {
          ...state.weatherForcast,
          error: true,
        },
      };
    default:
      return state;
  }
};

function convertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ":" + minutes.slice(-2);

  return formattedTime;
}

function convertDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "short" });

  const formattedDate = `${day} ${month}`;

  return formattedDate;
}
export default weatherReducer;
