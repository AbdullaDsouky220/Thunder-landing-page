import React from "react";
import line from "../../Assets/image.png";
import PriceCard from "./PriceCard";
import "./pricing.scss";
import {AiOutlineUser,AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdOutlineVerifiedUser} from 'react-icons/md'
function PricingSection() {
    const cards=[
        {
            id:1,
            icon:<AiOutlineUser/>,
            name:'Starter',
            features:[
                ['Unlimited Target Audience',true], 
                ['1 User Account',true], 
                ['100+ Video Tuts',false], 
                ['Public Displays',false ]
            ]
            ,
            realPrice:'9.99',
            currentPrice:'8.99',
            featured:false
        },
        {
            id:2,
            icon:<AiOutlineUsergroupAdd/>,

            name:'Personal',
            features:[
                ['Unlimited Target Audience',true], 
                ['1 User Account',true], 
                ['100+ Video Tuts',true], 
                ['Public Displays',false ]
            ],
            realPrice:'19.99',
            currentPrice:'18.99',
            featured:true
        },
        {
            id:3,
            name:'Ultimate',
            icon:<MdOutlineVerifiedUser/>,
            features:[
                ['Unlimited Target Audience',true], 
                ['1 User Account',true], 
                ['100+ Video Tuts',true], 
                ['Public Displays',true ]
            ],
            realPrice:'29.99',
            currentPrice:'28.99',
            featured:false
        },
    ]
  return (
    <div className="pricing__section">
      <div className="container">
        <div className="upper">
          <h1>Best Pricing Package</h1>
          <p className="light-p">
            Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
            mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
            vulputate.
          </p>
          <img src={line} alt="line in undeline" />
        </div>
       <div className="prices__card__container">
        {
            cards.map((card)=>(
                <PriceCard card={card} key={card.id} />
            ))
        }
       </div>
      </div>
    </div>
  );
}

export default PricingSection;
