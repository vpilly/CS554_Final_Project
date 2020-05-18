import React from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <Link to="/restaurant">
          {" "}
          <span>For Restaurants</span>
        </Link>
      </div>
      <div className={styles.right}>
        <span>Login</span>
        <button className="button">Sign out</button>
      </div>
    </div>
  );
};

export default TopNav;
