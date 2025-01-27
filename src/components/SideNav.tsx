import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const SideNav: React.FC = () => {
  return (
    <div className={styles.sidenav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
