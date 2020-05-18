// Individual Restaurant Listing component /listing
import React from "react";
//import styles from './Listing.module.css';
//import ListingNavBar from './ListingNavBar/ListingNavBar';
import ListingIntro from "./ListingIntro/ListingIntro";
import NavBar from "../NavBar/NavBar";
import ListingBody from "./ListingBody/ListingBody";
const Listing = (props) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ListingIntro />
      </div>
      <div>
        <ListingBody />
      </div>
    </div>
  );
};

export default Listing;
