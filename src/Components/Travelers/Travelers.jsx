import React, { useEffect } from 'react'
import dubai from "../../images/dubai.jpg"
import york from "../../images/york.jpg"
import istanbul from "../../images/istanbul.webp"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import user3 from "../../images/user3.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
//higher order array method

const travelers=[
  {
    id:1,
    destinationImage: dubai,
    travelerImage:user1,
    travelerName:"IsraTech",
    socialLink:"@isratech8"
  },
  {
    id:2,
    destinationImage: york,
    travelerImage:user2,
    travelerName:"Wilson Lindsey",
    socialLink:"@wilsonlindsey"
  },
  {
    id:3,
    destinationImage: istanbul,
    travelerImage:user3,
    travelerName:"Kylie Geller",
    socialLink:"@kylieGeller"
  }
]
const Travelers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
              {/*card  */}
          {
            travelers.map(({id, destinationImage,travelerImage,travelerName,socialLink})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">

            <img src={destinationImage} alt="" className="destinationImage" />

            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={travelerImage} className='travelerImage'/>
              </div>
              <div className="travelerName">
                <span>{travelerName}</span>
               <p>{socialLink}</p>
              </div>
            </div>

          </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Travelers