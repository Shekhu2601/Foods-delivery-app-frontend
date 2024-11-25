import React from "react";
import styles from "./footer.module.css";
import logo2 from "./logo/LOGO2.png";
import ap from "./logo/apple.png";
import fb from "./logo/Facebook.png";
import insta from "./logo/Instagram.png";
import tic from "./logo/TikTok.png";
import snap from "./logo/Snapchat.png";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.box1}>
            <img className={styles.logo2} src={logo2} alt="oders" />
            <img className={styles.ap} src={ap} alt="apple" />
            <p>
              Company # 490039-445, Registered with <br />
              House of companies.
            </p>
          </div>
          <div className={styles.box2}>
            <h3>Get Exclusive Deals in your Inbox</h3>
            <div>
              <input
                className={styles.inputs}
                type="email"
                name=""
                id=""
                placeholder="youremail@gmail.com"
              />
              <button className={styles.btn}>Subscribe</button>
            </div>
            <p>we wont spam, read our email policy</p>
            <div className={styles.logos}>
              <img className={styles.logoss} src={fb} alt="" />
              <img className={styles.logoss} src={insta} alt="" />
              <img className={styles.logoss} src={tic} alt="" />
              <img className={styles.logoss} src={snap} alt="" />
            </div>
          </div>
          <div className={styles.box3}>
            <h3>Legal Pages</h3>
           <div className={styles.link}>
           <a className={styles.links} href="#">Terms and conditions</a>
           <a href="#" className={styles.links}>Privacy</a>
            <a href="#" className={styles.links}>Cookies</a>
            <a href="#" className={styles.links}> Modern Slavery Statement</a>
           </div>
          </div>
          <div className={styles.box4}>
          <h3>Important Links</h3>
           <div className={styles.link}>
           <a className={styles.links} href="#">Get help</a>
           <a href="#" className={styles.links}>Add your restaurant</a>
            <a href="#" className={styles.links}>Sign up to deliver</a>
            <a href="#" className={styles.links}> Create a business account</a>
           </div>
          </div>
        </div>
        <div className={styles.subF}>
        <p className={styles.head}>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className={styles.con}>
            <p>Privacy   </p>
            <p>Terms</p>
            <p>Pricing </p>
            <p>Policy</p>
            
            <p>  Do not sell or share my personal information </p>
        </div>
        </div>
      </div>
    </>
  );
}
