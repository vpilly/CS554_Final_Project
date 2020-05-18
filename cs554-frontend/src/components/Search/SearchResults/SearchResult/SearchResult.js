// Individual search result
// return one single result on the /search page.
// Hardcoded values  -> replace by values from db.

import React from "react";
import styles from "./SearchResult.module.css";
const SearchResult = ({ rest: props }) => {
  return (
    <div className={styles["search-result"]}>
      <img
        src="https://via.placeholder.com/210"
        alt="business"
        className={styles["restaurant-image"]}
      />
      {/* 
      
      On clicking the link it will take it to the individual restaurant detail page. 
      
      */}
      <div className={styles["restaurant-info"]}>
        <u>
          {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Name'.
            
            */}
          <h2 className="subtitle">{props.name}</h2>
        </u>
        <div>
          {/* 
            
            resturant owner posts this as string when giving restaurant info on /restaurant
            get string request from db for 'Restaurant Pricing'.
            
            */}
          Pricing:&nbsp;
          {props.pricing}
        </div>
        <div>
          Food Type:&nbsp;
          {props.foodType}
        </div>
        <p>
          {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant.

            get string request from db for 'Restaurant Pricing '.
            retrieves all the tags the restaurant owner has specified
            limit of 5.
            
          
          */}
          <b>Description:</b>
          <br></br>
          <span className="tag">{props.description}</span>
        </p>
      </div>
      <div className={styles["restaurant-next"]}>
        <div onClick={props.onFavoriteChange} value={props.id}>
          {props.isFavorite ? (
            <i className="fas fa-star" value={props.id}></i>
          ) : (
            <i className="far fa-star" value={props.id}></i>
          )}
        </div>

        {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant.

            get string request from db for 'Restaurant street address','Restaurant City ', 'Restaurant State ', 'Restaurant phone number'.
            retrieves all the tags the restaurant owner has specified
            limit of 5.
            
          
          */}
        <p>{props.location}</p>
      </div>
    </div>
  );
};
export default SearchResult;
