import React, { useEffect, useState } from 'react'
import Card from './Card'
import styles  from './Manu.module.css'

export default function Manu() {
    const [search ,setSearch]= useState([])
    const [foodcate ,setFoodcate]= useState([])
    const [foodItem ,setFoodItem]= useState([])
    const loadData = async()=>{
        
        let response= await fetch("http://localhost:5000/foodsItem" ,{
            method: "GET",
            headers:{
                "Content-Type": `application/json`
            }
        })
        response =await response.json()
        setFoodItem(response)
       //console.log(response)
       let responseC= await fetch("http://localhost:5000/foodscategory" ,{
        method: "GET",
        headers:{
            "Content-Type": `application/json`
        }
    })
    responseC =await responseC.json()
    setFoodcate(responseC)
  // console.log(responseC)
    }
    useEffect(()=>{
        loadData()
    },[])
  return (
 <>
 
 <div className={styles.container}>
{ foodcate !=[]
? foodcate.map((data)=>{
    return(
     <div className={styles.con}>
        
           <div className={styles.cate} key={data._id}>
          {data.CategoryName}
        </div>
        
         <div className={styles.card}>
        {foodItem !=[] ? foodItem.filter((item)=>
           ( item.CategoryName===data.CategoryName) &&(item.name.toLowerCase().includes(search))

        ).map((filterItem)=>{
            return(
                   <div className={styles.card} key={filterItem._id}>
                    {<Card foodList={filterItem}>
                         </Card>}
                   
               
                
             </div>
             
            )
        }) :<div>
            no items
        </div> 
        }
        </div>
     </div>
    )
}):<div>
    "
    "
</div>
}
 </div>
 </>
  )
}
