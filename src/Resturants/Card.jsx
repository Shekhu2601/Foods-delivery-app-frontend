import React, { useState } from 'react'
import img from '../Pages/logo/o3.png'
import plus from '../Pages/logo/Plus.png'
import styles from './Card.module.css'
import { useCard, useDispatch } from '../Componet/ContextReducer'

export default function Card(props) {
    let dispatch =useDispatch();
    let data =useCard()
    const [quent ,setQuent] =useState(1)
    const handelAddtoCard = async()=>{
        await dispatch({type:"ADD",id:props.foodList._id ,name:props.foodList.name, description:props.foodList.description,price:props.foodList.price ,gty:quent})
        console.log(data)

    }
  return (
  <>
  <div className={styles.container}>
    <div className={styles.box1}>
        <h4> {props.foodList.name}</h4>
        <p className='discip'>{props.foodList.description} </p>
        <h4>₹ {props.foodList.price} </h4>
    </div>
    <div className={styles.box2}>
       <p> <img className={styles.Item}  src={props.foodList.img} alt="" /></p>
     <button className={styles.plus} onClick={handelAddtoCard} >   <img src={plus} alt="" /></button>
    </div>
  </div>
  </>
  )
}
