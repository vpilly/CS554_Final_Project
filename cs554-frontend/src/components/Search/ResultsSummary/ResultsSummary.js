//Results Summary component on the /search Page.
//Using the filters the user should be able to narrow the search to more specific results like filtering by cuisine, price range.

import React from "react";
import styles from "./ResultsSummary.module.css";

const ResultsSummary = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["results-summary"]}>
        <h1 className="subtitle">Showing Restaurants</h1>
        {/* 
            Should return the total number of results related to this search query.
            Replace with hardcorded value
            */}
        <p> Showing {props.count} results </p>
      </div>
      {/* 
        
        Filter results component
        */}
      <div className={styles.filters}>
        <button className="button" onClick={props.onFilterClear}>
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>Clear Filters</span>
        </button>
        {/* 
                Returns the value to filter by the button value.
                stored as string 
                */}
        <div className="buttons has-addons">
          <button
            className="button"
            value="cheap"
            onClick={props.onFilterChange}
          >
            $$
          </button>
          <button
            className="button"
            value="moderate"
            onClick={props.onFilterChange}
          >
            $$$
          </button>
          <button
            className="button"
            value="expensive"
            onClick={props.onFilterChange}
          >
            $$$$
          </button>
        </div>

        <div id="dropdown-menu4" role="menu">
          <select onChange={props.onFilterChange} defaultValue="">
            <option value="" disabled hidden>
              Select your cuisine
            </option>
            <option className="dropdown-item">American</option>
            <option className="dropdown-item">Italian</option>
            <option className="dropdown-item">Mexican</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ResultsSummary;
