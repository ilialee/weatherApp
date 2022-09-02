import React from "react";
import styles from "./Main.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Now from "../Now/Now";
import Details from "../Details/Details";
import Forcast from "../Forcast/Forcast";

const Main = ({ weather, forcast }) => {
  return (
    <div className={styles.Main}>
      <Routes>
        <Route path="/now" element={<Now weather={weather} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/forecast" element={<Forcast />} />
      </Routes>
    </div>
  );
};
export default Main;
