import React from 'react'
import { Tour } from './Tour'
import './css/tours.css'

const Tours = ({tour,removeTour}) => {
  return (
    <div>
        <div className='title'>
            <h2 style={{fontSize:'2rem'}}>Our Tours</h2>
            <div className='underLine'></div>
        </div>
        <div className='tourCard'>
          {tour.map((tours)=>{
              return<Tour key={tours.id} removeTour={removeTour} {...tours}/>
          })}
        </div>
        
    </div>
  )
}

export default Tours