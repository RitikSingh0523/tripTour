import React, { useState } from 'react'
import './css/tour.css'

export const Tour = ({name,image,info,price,id,removeTour}) => {
    const[readMore,setReadMore]=useState(false);
  return (
    <div className='tour_container'>
        <div className='upperContainer'>
            <img src={image} alt='tour Image' className='tour_images'></img>
            <span>${price}</span>
        </div>
        <div className='lowerContainer'>
            <h2>{name}</h2>
            <p>
                {readMore ? info:`${info.substring(0,200)}...`}
                <button onClick={()=>setReadMore(!readMore)} className='btn extend-btn'>{readMore ? 'Show Less':'Read More'}
                </button>
            </p>
            <button onClick={()=>{removeTour(id)}} className='btn remove-btn'>Not interested</button>

        </div>
    </div>
  )
}
