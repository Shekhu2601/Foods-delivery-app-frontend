import React from 'react'
import Navber from './Navber'
import styles from './home.module.css'
import img1 from './logo/img1.png'
import img2 from './logo/img2.png'
import img3 from './logo/color.png'
import one from './logo/one.png'
import two from './logo/two.png'
import three from './logo/three.png'
import logo from './LOGO1.png'
import of1 from './logo/of1.png'
import of2 from './logo/of2.png'
import of3 from './logo/of3.png'
import c1 from './logo/c1.png'
import c2 from './logo/c2.png'
import c3 from './logo/c3.png'
import c4 from './logo/c4.png'
import c5 from './logo/c5.png'
import c6 from './logo/c6.png'
import o1 from './logo/o1.png'
import o2 from './logo/o2.png'
import o3 from './logo/o3.png'
import ordering from './logo/img10.png'
import Resturants from './Resturants'
import appleplay from './logo/apple.png'
import get1 from './logo/get1.png'
import get2 from './logo/get2.png'
import Footer from './Footer'

export default function Home() {
  return (  <>

  <Navber/>
    <div className={styles.container} >
<div className={styles.banner}>
  <div className={styles.banner1}>
    <p>Order Restaurant food, takeaway and groceries.</p>
    <h1>Feast Your Senses, <br /><span className={styles.hed}>Fast and Fresh</span></h1>
    <p>Enter a postcode to see what we deliver</p>
    <div>
              <input
                className={styles.inputs}
                type="text"
                name=""
                id=""
                placeholder=""
              />
              <button className={styles.btn}>Subscribe</button>
            </div>
  </div>
  <div className={styles.banner2}>
  <img className={styles.img3} src={img3} alt="" />
    <img className={styles.img2} src={img2} alt="" />
    <img className={styles.img1} src={img1} alt="" />
   <div>
   <img className={styles.one} src={one} alt="" />
   <img className={styles.two} src={two} alt="" />
   <img className={styles.three} src={three} alt="" />
   </div>
    <div className={styles.popap1}>
<img className={styles.logo} src={logo} alt="" /> 
<h4 className={styles.tag1}>We’ve Received your order!</h4>
<p className={styles.tag2}>Awaiting Restaurant acceptance </p>
    </div>
    <div className={styles.popap2}>
<img className={styles.logo} src={logo} alt="" /> 
<h4 className={styles.tag1}>Order Accepted! </h4>
<p className={styles.tag2}>Your order will be delivered shortly </p>
    </div>
    <div className={styles.popap3}>
<img className={styles.logo} src={logo} alt="" /> 
<h4 className={styles.tag1}>Your rider's nearby</h4>
<p className={styles.tag2}>They're almost there-ger ready! </p>
    </div>
  </div>
</div>

<div className={styles.ad}>
<div className={styles.adH}>
<h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
<p className={styles.page}>

            <a href="" className={styles.links}>Sushi </a>
            <a href=""  className={styles.links}> Vegan  </a>
            <a href=""  className={styles.links,styles.links1}>Pizza & Fast food </a>
            <a href=""  className={styles.links}> others </a>
</p>
</div>
<div className={styles.adL}>
<img className={styles.of} src={of2} alt="" />
<img className={styles.of}src={of1} alt="" />
<img className={styles.of}src={of3} alt="" />
</div>
</div>
<div className={styles.categories}>
  <h2>Order.uk Popular Categories 🤩</h2>
  <div className={styles.cate}>
<div className={styles.cate1}>
  <img className={styles.c1} src={c1} alt="" />
  <h3>Burgers & Fast food</h3>
  <p className={styles.restu}>21 Restaurants</p>
</div>
<div className={styles.cate1}>
  <img className={styles.c1} src={c2} alt="" />
  <h3>Salads</h3>
  <p className={styles.restu}>32 Restaurants</p>
</div>
<div className={styles.cate1}>
  <img className={styles.c1} src={c3} alt="" />
  <h3>Pasta & Casuals</h3>
  <p className={styles.restu}>4 Restaurants</p>
</div>
<div className={styles.cate1}>
  <img className={styles.c1} src={c4} alt="" />
  <h3>Pasta & Casuals</h3>
  <p className={styles.restu}>32 Restaurants</p>
</div>
<div className={styles.cate1}>
  <img className={styles.c1} src={c5} alt="" />
  <h3>Breakfast</h3>
  <p className={styles.restu}>4 Restaurants</p>
</div>
<div className={styles.cate1}>
  <img className={styles.c1} src={c6} alt="" />
  <h3>Soups</h3>
  <p className={styles.restu}>4 Restaurants</p>
</div>

  </div>

</div>
<div className={styles.PopularRestaurants}>
  <h2>Popular Restaurants</h2>
  <div className={styles.list}>
    <Resturants/>
  </div>
</div>
  <div className={styles.odering}>
<div>
  <img className={styles.odr1} src={ordering} alt="" />
</div>
<div className={styles.logo_odr}>
  <img className={styles.logoimg} src={logo} alt="" /> <b className={styles.odr2}>ing is more</b>
  <p className={styles.per}>  <b  className={styles.per1}>Personalised</b> <b > & Instant</b></p>
  <p className={styles.aps}>Download the Order.uk app for faster ordering</p>
  <p className={styles.appleplay}>
    <img src={appleplay} alt="" />
  </p>
</div>

  </div>
  <div className={styles.getstart}> 
    <img className={styles.get} src={get1} alt="" />
    <img  className={styles.get}src={get2} alt="" />
  </div>
  <div className={styles.knowMore}>
    <div className={styles.know1}>
    <h3>Know more about us!</h3>
    <p className={styles.knowList}>
      <p className={styles.feq}>Frequent Questions </p>
      <p>Who we are?</p>
      <p>Partner Program</p>
      <p> Help & Support</p>
    </p>
    </div>
    <div className={styles.know2}>
<div className={styles.left}>
<h4 className={styles.frist}>How does Order.UK work?</h4>
<h4>What payment methods are accepted?</h4>
<h4>Can I track my order in real-time?</h4>
<h4>Are there any special discounts or <br />promotions available?</h4>
<h4>Is Order.UK available in my area?</h4>
</div>
<div className={styles.right}>
 <div className={styles.Rt} >
 <div className={styles.food} >
<h6 className={styles.h6}>Place an Order!</h6>
<p> <img className={styles.o1} src={o2} alt="" /></p>
<p>Place order through our <br /> website or Mobile app</p>
  </div>
  <div className={styles.food} >
<h6 className={styles.h6}>Place an Order!</h6>
<p> <img className={styles.o1} src={o3} alt="" /></p>
<p>Your can track your order <br />status with delivery time</p>
  </div>
  <div className={styles.food} >
<h6 className={styles.h6}>Place an Order!</h6>
<p> <img className={styles.o1} src={o1} alt="" /></p>
<p>Receive your order at a <br /> lighting fast speed!</p>
  </div>
 </div>
  <div className={styles.para}>
  Order.UK simplifies the food ordering process. Browse through our diverse menu, <br /> select your favorite dishes, and proceed to checkout. Your delicious meal will be <br /> on its way to your doorstep in no time!
  </div>
</div>
    </div>
  </div>
  <div className={styles.data}>
    <p className={styles.data1}>
      <p className={styles.numdata}>546 +</p>
      Registered Riders
      
    </p>
    <span className={styles.line}>|</span>
    <p className={styles.data1}>
      <p className={styles.numdata}>789,900 +
     </p>
     Orders Delivered
      
    </p>
    <span className={styles.line}>|</span>
    <p className={styles.data1}>
      <p className={styles.numdata}>690 +</p>
     
      Restaurants Partnered
      
    </p>
    <span className={styles.line}>|</span>
    <p className={styles.data1}>
      <p className={styles.numdata}>17,457+
       </p>
       Food items
      
    </p>
    


  </div>
  
    </div>
    <Footer/>
    </>
  )
}
