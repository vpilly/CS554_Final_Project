import React from "react";
import BusinessRating from "../../BusinessRating/BusinessRating";
import styles from "./ListingBody.module.css";

import CarouselComp from "../../CarouselComp/CarouselComp";
import { Link } from "react-router-dom";

const ListingBody = () => {
  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active ">
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#reserving">Book a Table</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles["listing-body"]}>
          <div id="overview">
            <div className={styles["align-row"]}>
              <h3>
                <BusinessRating />
              </h3>
              {/* 
            
            resturant owner posts this as string when giving restaurant info on /restaurant
            get string request from db for 'Restaurant Pricing'.
            
            */}
              $$$
            </div>
            <p className="tags">
              {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant.

            get string request from db for 'Restaurant Pricing '.
            retrieves all the tags the restaurant owner has specified
            limit of 5.
            
            
          */}
              Top tags :<span className="tag"> Pizza</span>
              <span className="tag">NYC</span>
              <span className="tag">Italian</span>
            </p>
            <p>
              {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Description'.
            
            */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr />
          </div>

          <div id="reserving">
            <h3 className="title is-size-3">Book a Table</h3>
            {/* 
            Value will be passed from searchbar/url for the party size 
            '5' will be replaced by the number value 'number' 
            stored as integer 
            */}
            <p>Party Size: 5 people</p>
            {/* 
            Value will be passed from searchbar/url for the date
            '17th May' will be replaced by the value 'date' 
            stored as date
            */}
            <p>Date: 17th may</p>
            <p>Time slots available:</p>

            {/* 

              On clicking the link it will take to the booking a table page. 
              
            */}
            <Link to="/reservepage">
              <div>
                {/* 
                
                retrieves the available time slots specified 
                could be stored as string. 
                resturant owner posts this when giving restaurant info on /restaurant. 
                sets in advance get request
                */}
                {/* 
                pass values on submit to the reserve page form.
                such as people:integer, date:date, timeslots: string
                */}
                <button class="button is-rounded">7.30pm</button>
                <button class="button is-rounded">8.30pm</button>
                <button class="button is-rounded">9.30pm</button>
              </div>
            </Link>
          </div>
          <div id="menu">
            <h3 className="title is-size-3">Menu</h3>
            <div>
              {/* 
              resturant owner posts this when giving restaurant info on /restaurant. 
              gets images list stored for menu.
              */}
              <div className={styles["carousel-size"]}>
                <CarouselComp />
              </div>
            </div>
            <hr />
          </div>
          <div id="photos">
            <h3 className="title is-size-3">Photos</h3>
            <div>
               {/* 
              resturant owner posts this when giving restaurant info on /restaurant. 
              gets images list stored for photos.
              */}
              <div className={styles["carousel-size"]}>
                <CarouselComp />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingBody;
