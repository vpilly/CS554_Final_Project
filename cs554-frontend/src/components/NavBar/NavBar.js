import React from "react";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  return (
    <div className={styles["nav-bar"]}>
      <Link to="/">
        <img src={logo} className={styles["logo"]} alt="belb logo" />
      </Link>
      <SearchBar
        small
        people={props.people}
        date={props.date}
        location={props.location}
      />
      <Link to='/accountinfo'>
      <button className={`button ${styles["nav-button"]}`}><i className="fas fa-user-circle"></i></button>
      </Link>
    </div>
  );
};
export default NavBar;

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
/*var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyDkKeivih0mPtcebcfh6-77UcJjI_Vqw70",
    authDomain: "restaurant-57d38.firebaseapp.com",
    databaseURL: "https://restaurant-57d38.firebaseio.com",
    projectId: "restaurant-57d38",
    storageBucket: "restaurant-57d38.appspot.com",
    messagingSenderId: "234278647194",
    appId: "1:234278647194:web:ec5a75e18ca012a2473623",
    measurementId: "G-9WKNKXFQQR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  */
