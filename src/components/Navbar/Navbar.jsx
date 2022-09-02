import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeStyle = {
    backgroundColor: '#000000',
    transition: 'all 0.3s',
    color: '#fff',
  };

  return (
    <nav className={styles.Navbar}>
      <NavLink
        to="/now"
        className={styles.navBtn}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Now
      </NavLink>
      <NavLink
        to="/details"
        className={styles.navBtn}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Details
      </NavLink>
      <NavLink
        to="/forecast"
        className={styles.navBtn}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Forecast
      </NavLink>
    </nav>
  );
};

export default Navbar;
