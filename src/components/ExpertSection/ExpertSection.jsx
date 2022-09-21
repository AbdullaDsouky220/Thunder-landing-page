import React, { useEffect } from "react";
import line from "../../Assets/image.png";
import "./expert.scss";
import ExpertCard from "./ExpertCard";
import expert1 from '../../Assets/expert1.png'
import expert2 from '../../Assets/expert2.png'
import expert3 from '../../Assets/expert3.png'
import expert4 from '../../Assets/expert4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLinkClickHandler } from "react-router-dom";
import { useState } from "react";
let  sliderone=0;
let sliderTwo=1;
function ExpertSection() {
    const [slider1,setSlider1]=useState(0)
    const [slider2,setSlider2]=useState(1)
    const experts=[
        {
        id:1,
        name:'Zachary Tevis',
        review:'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.',
        image:expert1
    },
        {
        id:2,
        name:'William Alderman',
        review:'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.',
        image:expert2
    },
        {
        id:3,
        name:'Jeremiah Eskew',
        review:'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.',
        image:expert3
    },
        {
        id:4,
        name:'Calvin Hubbard',
        review:'Anterdum maleada fames Integer molestie ante primis nulla facibus felis ulputate platea elit.',
        image:expert4
    },
]
const ClickHandler=(first,second)=>{
    setSlider1(first)
    setSlider2(second)
    }
  
    useEffect(() => {
    const interval=setInterval(()=>{
        
        if(sliderTwo<4){
        ClickHandler(sliderone,sliderTwo)
        sliderTwo++;
        sliderone++;

    }else if((sliderTwo===4)) {
        sliderone=0;
        sliderTwo=1;
        ClickHandler(sliderone,sliderTwo)
    }
  },3000)
  return()=>{
    clearInterval(interval)
  }


})


  return (
    <div className="expert__section">
      <div className="container">
        <div className="upper">
          <h3>Meet Our Expert People</h3>
          <p className="light-p">
            Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
            mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
            vulputate.
          </p>
          <img src={line} alt="line in undeline" />
        </div>
        <div className="cards__container">
        <ExpertCard expert={experts[slider1]}/>
        <ExpertCard expert={experts[slider2]}/>
   
        </div>
        <div className="dots">
            <FontAwesomeIcon onClick={()=>ClickHandler(0,1)}className={`dot ${slider1===0&&slider2===1?'active':null} `} icon={faCircle}/>
            <FontAwesomeIcon onClick={()=>ClickHandler(1,2)} className={`dot ${slider1===1&&slider2===2?'active':null} `}icon={faCircle}/>
            <FontAwesomeIcon onClick={()=>ClickHandler(2,3)} className={`dot ${slider1===2&&slider2===3?'active':null} `} icon={faCircle}/>
        </div>
      </div>
    </div>
  );
}

export default ExpertSection;
