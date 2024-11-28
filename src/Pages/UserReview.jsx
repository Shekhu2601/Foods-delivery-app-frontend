import React from 'react'
import styles from './UserReview.module.css'
import ar1 from './logo/ar1.png'
import ar2 from './logo/ar2.png'
import review from './logo/review.png'

export default function UserReview() {
  return (
    
    <>
    <div className={styles.container}>
    <div className={styles.heading}>
   <h2>Customer Reviews</h2>
   <div><img className={styles.ar} src={ar1} alt="" />
   <img className={styles.ar} src={ar2} alt="" /></div>
   </div>
   <div className={styles.review}>
    <img className={styles.review} src={review} alt="" />
    <img  className={styles.review}  src={review} alt="" />
    <img  className={styles.review}  src={review} alt="" />
    
   </div>
    </div>
    </>
  )
}
