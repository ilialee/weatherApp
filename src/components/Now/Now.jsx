import React from "react";
import styles from "./Now.module.css";
import likeImg from "../../Assets/img/favorite2.svg";
import { connect } from "react-redux";
import { addCity } from "../../store/actions";

const Now = ({ weather, dispatch }) => {
  return (
    <div className={styles.Now}>
      <div className={styles.now__temperature}>{weather.data.TEMPERATURE}</div>
      <div className={styles.now__img}>
        <img className={styles.now__center__img} src={weather.data.ICON} />
      </div>
      <div className={styles.now__footer}>
        <span className={styles.now__city}>{weather.data.CITY}</span>
        <button
          className={styles.now__heart__btn}
          onClick={() => dispatch(addCity(weather.data.CITY))}
          type="submit"
        >
          <img class={styles.now__heart__img} src={likeImg} alt="#" />
        </button>
      </div>
    </div>
  );
};

export default connect()(Now);
