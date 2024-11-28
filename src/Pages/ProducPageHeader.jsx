import React from "react";
import styles from "./ProducPageHeader.module.css";
import img1 from "./logo/himg1.png";
import img2 from "./logo/himg.png";
import odr from "./logo/OrderCompleted.png";
import mtrbike from "./logo/Motocross.png";
import clock from "./logo/Clock.png";

export default function ProducPageHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.box1}>
            <p>I'm lovin' it!</p>
            <h1>McDonald’s East London</h1>
            <p className={styles.odr}>
              <p className={styles.odr1}>
                <img className={styles.odrimg} src={odr} alt="" /> Minimum
                Order: 12 GBP
              </p>
              <p className={styles.odr1}>
                <img className={styles.odrimg} src={mtrbike} alt="" /> Delivery
                in 20-25 Minutes
              </p>
            </p>
            <p className={styles.clock}>
              <img className={styles.clockL} src={clock} alt="" /> Open until
              3:00 AM
            </p>
          </div>
          <div className={styles.box2}>
            <img className={styles.img1} src={img1} alt="" />
            <img className={styles.img2} src={img2} alt="" />
          </div>
        </div>
        <div className={styles.search}>
          <h2>All Offers from McDonald’s East London</h2>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Search from menu..."
          />
        </div>
        <div className={styles.manu}>
          <p className={styles.offer}>Offers </p>
          <p> Burgers </p>
          <p> Fries </p>
          <p>Snacks</p>
          <p>Salads </p>
          <p> Cold drinks </p>
          <p> Happy Meal® </p>
          <p> Desserts </p>
          <p> Hot drinks </p>
          <p> Sauces </p>
          <p> Orbit®</p>
        </div>
      </div>
    </>
  );
}
