import { combineReducers } from "redux";
import cities from "./cities";
import weatherReducer from "./weather";

const rootReducer = combineReducers({
  cities: cities,
  weather: weatherReducer,
});

export default rootReducer;
