// Search Results Component
// Holds the groups of search results in /search
// Should return All the results of the search result here.

import React from "react";
import styles from "./SearchResults.module.css";
import SearchResult from "./SearchResult/SearchResult";

const SearchResults = ({
  restraunts: props,
  onFavoriteChange,
  onSelectionChange,
}) => {
  return (
    <div className={styles["search-results"]}>
      {props.map((rest, index) => {
        return (
          <SearchResult
            rest={rest}
            key={`rest-` + index}
            onFavoriteChange={onFavoriteChange}
            onSelectionChange={onSelectionChange}
          ></SearchResult>
        );
      })}
    </div>
  );
};

export default SearchResults;
