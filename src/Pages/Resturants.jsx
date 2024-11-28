import React from 'react'
import styles from './restaurant.module.css'
import mac from './logo/mac.png'
import r2 from './logo/r2.png'
import r3 from './logo/r3.png'
import r4 from './logo/r4.png'
import r5 from './logo/r5.png'
import r6 from './logo/r6.png'
import { Link } from 'react-router-dom'

export default function Resturants() {
  return (
   <>
   <div className={styles.container}>
 <Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={mac} alt="" />
<h4 className={styles.name}>McDonald’s London </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={r2} alt="" />
<h4 className={styles.name}>Papa Johns </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={r3} alt="" />
<h4 className={styles.name}>KFC West London </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={r4} alt="" />
<h4 className={styles.name}>Texas Chicken </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={r5} alt="" />
<h4 className={styles.name}>Burger King </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={r6} alt="" />
<h4 className={styles.name}>Shaurma 1 </h4>
</div>
</Link>
<Link className={styles.links} to="/restaurant" > <div className={styles.r1}>
<img className={styles.mac1} src={mac} alt="" />
<h4 className={styles.name}>McDonald’s London </h4>
</div>
</Link>
   </div>
   </>
  )
}
