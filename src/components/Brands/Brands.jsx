import React from 'react'
import line from "../../Assets/image.png";
import brand1 from "../../Assets/brand1.png";
import brand2 from "../../Assets/brand2.png";
import brand3 from "../../Assets/brand3.png";
import brand4 from "../../Assets/brand4.png";
import './brands.scss'
function Brands() {
  return (
    <div className="brands__section ">
    <div className="container">
      <div className="upper">
        <h1>All Trusted Brands</h1>
        <p className="light-p">
        Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum mauris sit amet arcu
fringilla auctor In eleifend maximus nisi sed vulputate.
        </p>
        <img src={line} alt="line in undeline" />
      </div>
      <div className="brands__images">
        <img src={brand1} alt='bands111'/>
        <img src={brand2} alt='bands111'/>
        <img src={brand3} alt='bands111'/>
        <img src={brand4} alt='bands111'/>
      </div>
      </div>
    </div>
  )
}

export default Brands
