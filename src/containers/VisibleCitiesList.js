import { connect } from "react-redux";
import Location from "../components/Location/Location";
import { deleteCity } from "../store/actions/index";

const mapStateToProps = (state) => {
  return { cities: state.cities };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather: (id) => dispatch(deleteCity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
