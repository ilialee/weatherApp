import React from "react";
import styles from "./Now.module.css";
import likeImg from "../../Assets/img/favorite2.svg";
import { connect } from "react-redux";
import { addCity } from "../../store/actions";

const Now = ({ weather }) => {
  debugger;
  return <div className={styles.Now}></div>;
};

// export default connect()(Now);
export default Now;
