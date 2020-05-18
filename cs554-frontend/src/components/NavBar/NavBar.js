import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <div className={styles["nav-bar"]}>
      <SearchBar
        small
        people={props.people}
        date={props.date}
        location={props.location}
        onChange={props.onChange}
      />
    </div>
  );
};
export default NavBar;
