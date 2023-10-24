import React from 'react'
import img1 from "../../images/grid1.jpg"
import img2 from "../../images/grid2.jpg"
import img3 from "../../images/grid3.jpg"
const Images = () => {
  return (
    <div className='Grid1'>
        <div><img src={img1} className='ImagesGrid1'/></div>
        <div>
        <img src={img2} className='ImagesGrid2'/></div>
        <div><img src={img3} className='ImagesGrid3'/></div>
    </div>
  )
}

export default Images