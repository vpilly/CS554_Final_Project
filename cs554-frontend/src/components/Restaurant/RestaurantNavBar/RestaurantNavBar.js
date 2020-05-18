import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import styles from './RestaurantNavBar.module.css';

const RestaurantNavBar = () => {
    return(
        <div className={styles.container}>
            <div>
                <Link to='/'><img src = {logo} className = {styles['logo']} alt = 'belb logo' /></Link>
            </div>
            <div className={styles.right}>
                 <button className={`button  ${styles['nav-button']} `} ><i className="fas fa-user-circle"></i></button>
                 <button className={`button  ${styles['nav-button']} `} ><i className="fas fa-search"></i></button>
            </div>
            </div> 
    );
};

export default RestaurantNavBar;