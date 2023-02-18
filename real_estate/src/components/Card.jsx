import React from 'react';
import style from "../Styles/card.module.css";

const Card = ({element}) => {
  return (
    <div className={style.card}>
        <img src={element.image} alt={element.id} />
        <div>
         <span> Type:{element.type}</span> 
         <span> Price:{element.price}</span>  
        </div>
        <p>Address/Location:-{element.address}</p>
    </div>
  )
}

export default Card