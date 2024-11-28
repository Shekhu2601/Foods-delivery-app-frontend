import React from "react";
import styles from "./DeliveryInfo.module.css";
import tracking from "./logo/Tracking.png";
import contact from "./logo/IDVerified.png";
import times from "./logo/Clock.png";

export default function DeliveryInfo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.DeliveryInfo}>
          <h1 className={styles.deli1}>
          
            <img src={tracking} alt="" /> Delivery information
          </h1>
          <p>
           
            <b>Monday:</b> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
          </p>
          <p>
            
            <b>Tuesday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
           
            <b>Monday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
           
            <b>Wednesday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
           
            <b>Thursday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
            
            <b>Friday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
           
            <b>Saturday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
            
            <b>Sunday:</b> 8:00 AM–3:00 AM
          </p>
          <p>
           
            <b>Estimated time until delivery:</b> 20 min
          </p>
        </div>
        <div className={styles.DeliveryInfo}>
        <h1 className={styles.deli1}>
          
          <img src={contact} alt="" /> Contact information
        </h1>
        <p>
         
         <p>If you have allergies or other dietary <br /> <br />restrictions, please contact the <br /> <br /> restaurant. The restaurant will provide food-specific <br /> <br />information upon request.



http://mcdonalds.uk/
</p>
<h6>Phone number</h6>
<p>+934443-43</p>
<h6>Website</h6>

<p>http://mcdonalds.uk/</p>
        </p>

        </div>
        <div className={styles.OptrationalTime}>
        <h1 className={styles.deli1}>
          
          <img className={styles.imgt} src={times} alt="" />Operational Times
        </h1>
        <p>
         
          <b>Monday:</b>  8:00 AM–3:00 AM
        </p>
        <p>
          
          <b>Tuesday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
         
          <b>Monday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
         
          <b>Wednesday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
         
          <b>Thursday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
          
          <b>Friday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
         
          <b>Saturday:</b> 8:00 AM–3:00 AM
        </p>
        <p>
          
          <b>Sunday:</b> 8:00 AM–3:00 AM
        </p>
       
        </div>
      </div>
    </>
  );
}
