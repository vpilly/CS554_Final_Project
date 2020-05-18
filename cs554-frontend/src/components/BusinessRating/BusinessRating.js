import React from "react";
import styles from "./BusinessRating.module.css";
import Rating from "react-rating";

const BusinessRating = () => {
  return (
    <div className={styles.ratings}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={3.5}
      />
      <div>19 Reviews</div>
    </div>
  );
};
export default BusinessRating;
