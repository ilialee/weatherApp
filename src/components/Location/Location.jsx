import React from "react";
import styles from "./Location.module.css";

const Location = ({ cities, deleteCity }) => {
  const cityList = cities.map((item) => {
    return (
      <div className={styles.listWrapper}>
        <li key={item.id}>{item.city}</li>
        <button onClick={() => deleteCity(item.id)}>delete</button>
      </div>
    );
  });
  return (
    <div className={styles.Location}>
      <div className={styles.locationHeader}>Added Locations:</div>
      <div className={styles.locationFavorites}>
        <ul className={styles.favoritesList}>{cityList}</ul>
      </div>
    </div>
  );
};

export default Location;
