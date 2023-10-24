import React from 'react'
import img from "../../images/long1.webp"
import img1 from "../../images/long2.webp"

const Long = () => {
  return (
    <div>
        <div className='long'>
            <img src={img} className='long1'/>
            <img src={img1} className='long2'/>
        </div>
    </div>
  )
}

export default Long