import React from "react";
import styles from "./nav.module.css";
import loc from "./logo/Location.png";
import shoping from "./logo/Fullshoppin.png";
import arro from "./logo/ForwardButton.png";
import oders from "./LOGO1.png";
import user from "./logo/MaleUser.png";


export default function Navber() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box1}>
          <p>
            🌟 Get 5% Off your first order,{" "}
            <span className={styles.promo}>Promo: ORDER5</span>{" "}
          </p>
          <div className={styles.loc_simbol}>
            <img className={styles.locimg} src={loc} alt="location" />
            <p>
              {" "}
              <span> Regent Street, A4, A4201, London</span>{" "}
              <a className={styles.location} href="#">Change Location</a>
            </p>
            <div className={styles.mycart}>
              <div className={styles.cart}>
                <div className={styles.logo1}>
                  <img className={styles.logo} src={shoping} alt="shoping" />{" "}
                  &nbsp; My Cart
                </div>
                <span className={styles.devider}> .</span>{" "}
                <span className={styles.devider}> </span>
                <div className={styles.ar}>
                  <img className={styles.logoar} src={arro} alt="arow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.logob}>
            <img className={styles.logoimg} src={oders} alt="" />
          </div>
          <div className={styles.page}>
            <a className={styles.links,styles.links1} href="">Home </a>
            <a href="" className={styles.links}>Browse Menu </a>
            <a href=""  className={styles.links}> Special Offers </a>
            <a href=""  className={styles.links}>Restaurants </a>
            <a href=""  className={styles.links}>Track Order </a>
            
           
          
          </div>
         <div className={styles.login}>
         <img src={user} alt="user" />
         <a href="">Login/Signup</a>
         </div>
        </div>
      </div>
    </>
  );
}
