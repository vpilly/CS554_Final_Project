import React from 'react';
import RestaurantNavBar from './RestaurantNavBar/RestaurantNavBar';
//import styles from './Restaurant.module.css';
import ListingIntro from '../Listing/ListingIntro/ListingIntro';
import RestaurantBody from './RestaurantBody/RestaurantBody';

const Restaurant = () => {
  return (
    <div>
        <RestaurantNavBar/>
        
        <ListingIntro/>

        <RestaurantBody/>
    </div>
  );
};

export default Restaurant;
