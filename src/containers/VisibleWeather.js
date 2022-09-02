import { connect } from "react-redux";
import Weather from "../components/Weather/Weather";
import { getWeather } from "../store/actions/index";

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weatherToday,
    forcast: state.weather.weatherForcast,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather: (location) => dispatch(getWeather(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
