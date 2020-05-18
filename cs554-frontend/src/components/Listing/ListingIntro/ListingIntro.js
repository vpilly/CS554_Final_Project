// Restaurant details 'Listing Intro' on /listing.
// Retrives Restaurant details to display.

import React from "react";
import styles from "./ListingIntro.module.css";

const ListingIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles["listing-summary"]}>
      {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Name'.
            
            */}
        <h1 className="title is-size-2">Pizza Palace</h1>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-utensils"></i>
          </span>
           {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Cuisine_Type'.
            
            */}
          Italian
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-map-pin"></i>
          </span>
           {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_City'.
            
            */}
          New York
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className="fas fa-hourglass"></i>
          </span>
          {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_timing hours_weekday'.
            
            */}
          12pm to 12 am (Mon-Fri)
        </p>
        <p>
          <span className={`icon ${styles["icon-spacing"]}`}>
            <i className=""></i>
          </span>
           {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_timing hours_weekend'.
            
            */}
          12pm to 12 am (Sat-Sun)
        </p>
      </div>
    </div>
  );
};

export default ListingIntro;
