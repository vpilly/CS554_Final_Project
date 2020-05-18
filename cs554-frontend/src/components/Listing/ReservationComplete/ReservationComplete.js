// Reservation Complete /reservecomplete
// get object of Reservation complete and display
//   {
//   Name of user:String
//   Date: Date
//   Time: String
//   People : integer
//    }


import React from "react";
import NavBar from "../../NavBar/NavBar";
import styles from "./ReservationComplete.module.css";

const ReservationComplete = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className={styles.container}>
        <div className={styles.body}> Reservation Complete</div>

        <div className={`card is-center ${styles["reserve-page-card"]}`}>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image ">
                  <img
                    src="https://via.placeholder.com/210"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-3">Pizza Palace</p>

                <p>
                  <span className="icon">
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  Tues,May 19
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-clock"></i>
                  </span>
                  7.30pm
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-user-friends"></i>
                  </span>
                  2 people
                </p>
              </div>
            </div>
          </div>
          <div className="content">

            {/* 
            
            email : string 
            replaced by abc@abc.com
            */}
            Confirmation Email has been sent to abc@abc.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationComplete;
