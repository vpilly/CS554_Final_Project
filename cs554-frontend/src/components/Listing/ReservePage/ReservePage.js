import React from "react";
import NavBar from "../../NavBar/NavBar";
import styles from "./ReservePage.module.css";
import { Link } from "react-router-dom";

const ReservePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div className={styles.body}> You're Almost done!</div>
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
               {/* 
            resturant owner posts this as string when giving restaurant info on /restaurant
            gets string from db for 'Restaurant_Name'.
            
            */}
                <p className="title is-3">Pizza Palace</p>
                {/* 
                
                Get values from previous page and display
                */}
                <p>
                  <span className="icon">
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  {/* 
                
                Get values from previous page and display
                */}
                  Tues,May 19 
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-clock"></i>
                  </span>
                   {/* 
                
                Get values from previous page and display
                */}
                  7.30pm
                </p>
                <p>
                  <span className="icon">
                    <i className="fas fa-user-friends"></i>
                  </span>
                 {/* 
                
                Get values from previous page and display
                */}
                  2 people
                </p>
              </div>
            </div>
            
          </div>
            {/* 
            
            on submit form post details to db 
            Name of user:String
            Date: Date
            Time: String
            People : integer
            */}
          <div className="control">
            <Link to="/reservecomplete">
              <button className="button is-link is-center">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservePage;
