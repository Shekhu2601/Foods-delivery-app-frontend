import React from "react";
import styles from "./McDonalds.module.css";
import Navber from "../Pages/Navber";
import ProducPageHeader from "../Pages/ProducPageHeader";
import dic1 from "../Pages/logo/dic1.png";
import dic2 from "../Pages/logo/dic2.png";
import DeliveryInfo from "../Pages/DeliveryInfo";
import Maps from "../Pages/Maps";
import UserReview from "../Pages/UserReview";
import Resturants from "../Pages/Resturants";
import Footer from "../Pages/Footer";
export default function McDonalds() {
  return (
    <>
      <Navber />
      <ProducPageHeader />
      <div className={styles.container}>
        <div className={styles.offer}>
          <img className={styles.dic1} src={dic2} alt="" />
          <img className={styles.dic1} src={dic1} alt="" />
          <img className={styles.dic1} src={dic2} alt="" />
        </div>

        <div className={styles.main}></div>
        <div className={styles.delivery}>
          <DeliveryInfo />
        </div>
        <div className={styles.maps}>
          <div className={styles.box}>
            <Maps />
          </div>
        </div>
        <div></div>
      </div>
      <UserReview/>
      <div className={styles.Resturants}>
        <h2>Similar Restaurants</h2>
       <Resturants/>
      </div>
      <Footer/>
    </>
  );
}
