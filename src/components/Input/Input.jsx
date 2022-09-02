import React from "react";
import styles from "./Input.module.css";
import searchImg from "../../Assets/img/search.png";

const Input = (props) => {
  let inputEl = React.useRef(null);

  const onClickButton = () => {
    let text = inputEl.current.value;
    props.getWeather(text);
  };

  return (
    <form className={styles.form} action="#">
      <input
        className={styles.input}
        ref={inputEl}
        type="text"
        placeholder="search..."
      />
      <button className={styles.searchBtn} onClick={() => onClickButton()}>
        <img src={searchImg} alt="" />
      </button>
    </form>
  );
};

export default Input;
