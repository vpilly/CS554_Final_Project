// Add cuisine type dropdown
// Add timing hours in info 
// add restaurant description input

import React from "react";
import styles from "./RestaurantBody.module.css";
//import CarouselComp from "../../CarouselComp/CarouselComp";
//import router from "../../../router/router";



const RestaurantBody = () => {
  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active ">
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#info">Information</a>
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
        <div className={styles["restaurant-body"]}>
          <div id="reservations">
            <p>New Reservations :</p>
        
            <p>
            Reservations Slot
            </p>
            <hr/>
          </div> 

          <div id='info'>
                <h3>Edit Information</h3>
                <p>
                <div>
        <div className="field">
        <label className="label">Restaurant Name</label>
            <div className="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <div className="field">
        <label className="label">Email</label>
            <div className="control">
                <input class="input" type="email" placeholder="a@a.com"/>
            </div>
        </div>
        <div className="field">
        <label className="label">Contact</label>
            <div className="control">
                <input class="input" type="number" placeholder="Text input"/>
            </div>
        </div>
        <div className="field">
        <label className="label">City</label>
            <div className="control">
              
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <div className="field">
        <label className="label">Province/State</label>
            <div className="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <div className="field">
        <label className="label">Country</label>
            <div className="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <div className="field">
        <label className="label">Postal Code</label>
            <div className="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
        </div>
        </div>
                </p>
          </div> 
        <div id="menu">
            <h3 className="title is-size-3">Menu</h3>
            <p>
              <div className={styles["carousel-size"]}>
                Menu
              </div>
            </p>
            <hr/>
        </div>
         {/* <div id="photos">
            <h3 className="title is-size-3">Photos</h3>
            <p>
              <div className={styles["carousel-size"]}>
                <CarouselComp />
              </div>
            </p>
            <hr/>
          </div>*/}
        </div> 
      </div> 
    </div>
  );
};

export default RestaurantBody;
